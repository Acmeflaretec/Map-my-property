const Builders = require('../models/builders');


const getAdminbuilders = async (req, res) => {
  try {
    const { page = 1, perPage = 10, sortBy = 'createdAt', order = 'desc', search = '' } = req.query;
    const query = search ? { name: { $regex: search, $options: 'i' } } : {};

    const options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10),
      sort: { [sortBy]: order === 'desc' ? -1 : 1 }
    };

    const builders = await Builders.paginate(query, options);


    res.status(200).json(builders);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
};


const getbuildersById = async (req, res) => {
  try {
    const data = await Builders.findOne({ _id: req.params.id }).populate('projects')
    res.status(200).json({ data, message: 'builders found successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
}


const addbuilders = async (req, res) => {
  console.log('addbuilders');

  try {
    const {
      title, subtitle, description,  reviewsName, reviewsRating, reviewsReview,
      // addressStreet, addressCity, addressState, addressZip, addressCountry, addressPhone,,questions, answer,
      featuresText, featuresHelpertext, vision, location
    } = req?.body;

    // let faqsValue = [];
    // if (questions) {
    //   const questionsArray = Array.isArray(questions) ? questions : [questions];
    //   const answerArray = Array.isArray(answer) ? answer : [answer];
    //   const faqsInside = questionsArray.map((questions, index) => ({
    //     questions,
    //     answer: answerArray[index]
    //   }));
    //   faqsValue = faqsInside[0]?.questions ? faqsInside : undefined;
    // }
    let featuresValue = [];
    if (featuresText) {
      const featuresArray = Array.isArray(featuresText) ? featuresText : [featuresText];
      const featuresDetailsArray = Array.isArray(featuresHelpertext) ? featuresHelpertext : [featuresHelpertext];
      const configurationInside = featuresArray.map((text, index) => ({
        text,
        helpertext: featuresDetailsArray[index]
      }));

      featuresValue = configurationInside[0]?.text ? configurationInside : undefined;
    }
    let reviewValue = [];
    if (reviewsName) {
      const reviewsNameArray = Array.isArray(reviewsName) ? reviewsName : [reviewsName];
      const reviewsRatingArray = Array.isArray(reviewsRating) ? reviewsRating : [reviewsRating];
      const reviewsReviewArray = Array.isArray(reviewsReview) ? reviewsReview : [reviewsReview];
      const configurationInside = reviewsNameArray.map((name, index) => ({
        name,
        rating: reviewsRatingArray[index],
        review: reviewsReviewArray[index],
        image: req.files.reviews && req.files.reviews[index].filename,
      }));

      reviewValue = configurationInside[0]?.name ? configurationInside : undefined;
    }
    // let addressValue = [];
    // if (addressStreet) {
    //   const addressStreetArray = Array.isArray(addressStreet) ? addressStreet : [addressStreet];
    //   const addressCityArray = Array.isArray(addressCity) ? addressCity : [addressCity];
    //   const addressStateArray = Array.isArray(addressState) ? addressState : [addressState];
    //   const addressZipArray = Array.isArray(addressZip) ? addressZip : [addressZip];
    //   const addressCountryArray = Array.isArray(addressCountry) ? addressCountry : [addressCountry];
    //   const addressPhoneArray = Array.isArray(addressPhone) ? addressPhone : [addressPhone];
    //   const configurationInside = addressStreetArray.map((street, index) => ({

    //     street,
    //     city: addressCityArray[index],
    //     state: addressStateArray[index],
    //     zip: addressZipArray[index],
    //     country: addressCountryArray[index],
    //     phone: addressPhoneArray[index],
    //   }));

    //   addressValue = configurationInside[0]?.street ? configurationInside : undefined;
    // }

    const logo = req?.files?.logo[0]?.filename
    const builders = new Builders({
      title, subtitle, description, testimonials: reviewValue,  vision, location,
      features: featuresValue, logo, image: req?.files?.images[0]?.filename,
      // address: addressValue, faqs: faqsValue,
    });
    const savedBuilder = await builders.save();

    res.status(200).json({ message: "Builders added successfully !" });


  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
};

const updatebuilders = async (req, res) => {
  try {
    const { _id, image, isAvailable, title, subtitle, description,  reviewsName, reviewsRating,reviewsReview,
      //  addressStreet, addressCity, addressState, addressZip, addressCountry, addressPhone,questions, answer,
      featuresText, featuresHelpertext, vision, location, logo
    } = req?.body

    // let faqsValue = [];
    // if (questions) {
    //   const questionsArray = Array.isArray(questions) ? questions : [questions];
    //   const answerArray = Array.isArray(answer) ? answer : [answer];
    //   const faqsInside = questionsArray.map((questions, index) => ({
    //     questions,
    //     answer: answerArray[index]
    //   }));
    //   faqsValue = faqsInside[0]?.questions ? faqsInside : undefined;
    // }
    let featuresValue = [];
    if (featuresText) {
      const featuresArray = Array.isArray(featuresText) ? featuresText : [featuresText];
      const featuresDetailsArray = Array.isArray(featuresHelpertext) ? featuresHelpertext : [featuresHelpertext];
      const configurationInside = featuresArray.map((text, index) => ({
        text,
        helpertext: featuresDetailsArray[index]
      }));

      featuresValue = configurationInside[0]?.text ? configurationInside : undefined;
    }

    let reviewValue = [];
    let k = 0;
    console.log('req?.body?.reviewsImagePocision', req?.body);
    console.log('req?files', req?.files);

    if (reviewsName) {
      const reviewsNameArray = Array.isArray(reviewsName) ? reviewsName : [reviewsName];
      const reviewsRatingArray = Array.isArray(reviewsRating) ? reviewsRating : [reviewsRating];
      const reviewsReviewArray = Array.isArray(reviewsReview) ? reviewsReview : [reviewsReview];
      const configurationInside = reviewsNameArray.map((name, index) => ({
        name,
        rating: reviewsRatingArray[index],
        review: reviewsReviewArray[index],
        // image: req?.body?.reviewsImagePocision[index] === '' ? (k++,req.files.reviews[k-1].filename) : req?.body?.reviewsImagePocision[index] ,
        image: Array.isArray(req?.body?.reviewsImagePocision) ? (req?.body?.reviewsImagePocision[index] === '' ? (k++, req.files.reviews[k - 1].filename) : req?.body?.reviewsImagePocision[index]) : (req?.body?.reviewsImagePocision === '' ? (req.files.reviews[0].filename) : req?.body?.reviewsImagePocision),
      }));

      reviewValue = configurationInside[0]?.name ? configurationInside : undefined;
    }

    // let addressValue = [];
    // if (addressStreet) {
    //   const addressStreetArray = Array.isArray(addressStreet) ? addressStreet : [addressStreet];
    //   const addressCityArray = Array.isArray(addressCity) ? addressCity : [addressCity];
    //   const addressStateArray = Array.isArray(addressState) ? addressState : [addressState];
    //   const addressZipArray = Array.isArray(addressZip) ? addressZip : [addressZip];
    //   const addressCountryArray = Array.isArray(addressCountry) ? addressCountry : [addressCountry];
    //   const addressPhoneArray = Array.isArray(addressPhone) ? addressPhone : [addressPhone];
    //   const configurationInside = addressStreetArray.map((street, index) => ({

    //     street,
    //     city: addressCityArray[index],
    //     state: addressStateArray[index],
    //     zip: addressZipArray[index],
    //     country: addressCountryArray[index],
    //     phone: addressPhoneArray[index],
    //   }));

    //   addressValue = configurationInside[0]?.street ? configurationInside : undefined;
    // }
    let logos = logo
    if (req?.files?.logo?.length > 0) {
      logos = req.files.logo[0].filename
    }
    let images = image
    if (req?.files?.images?.length >0) {
      images = req.files.images[0].filename
    }

     await Builders.updateOne({ _id }, {
      $set: {
        isAvailable, image: images, title, subtitle, description, testimonials: reviewValue,
        // address: addressValue,  faqs: faqsValue,
        logo: logos, features: featuresValue, vision, location,

      }
    })

    res.status(200).json({ message: "builders updated successfully !" });
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
}

const deletebuilders = async (req, res) => {
  try {
    await Builders.deleteOne({ _id: req.params.id })
    res.status(200).json({ message: 'builders deleted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
}

const getSelectbuilders = async (req, res) => {
  try {
    const data = await Builders.find({ isAvailable: true })
    res.status(200).json({ data })
  } catch (error) {
    console.log(error);
  }
};




module.exports = {
  getbuildersById,
  updatebuilders,
  addbuilders,
  deletebuilders,
  getAdminbuilders,
  getSelectbuilders,
}  