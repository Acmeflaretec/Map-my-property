const Contact = require("../models/contact");
const sendEmail = require("../utils/emailService");


const createContact = async (req, res) => {
  const { name, email, phoneNumber, pathname } = req.body;

  try {
    const newContact = await Contact.create({
      name,
      email,
      phoneNumber,
      pathname,
    });

    const emailContent = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #007bff;">Hello Admin,</h2>
        <p>you have received a contact inquiry</p>
        <h3>Contact Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone Number:</strong> ${phoneNumber}</li>
        </ul>
        <p>Best Regards,<br><strong>AcmeFlare Team</strong></p>
      </div>
    `;

    await sendEmail( "Thank you for contacting us!", emailContent);

    res.status(201).json({
      message: "Contact message created successfully",
      contact: newContact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getContacts = async (req, res) => {
  try {
    const {
      page = 1,
      perPage = 10,
      sortBy = "createdAt",
      order = "desc",
      search = "",
    } = req.query;
    const query = search ? { name: { $regex: search, $options: "i" } } : {};

    const options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10),
      sort: { [sortBy]: order === "desc" ? -1 : 1 },
    };

    const data = await Contact.paginate(query, options);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: error?.message ?? "Something went wrong !" });
  }
};

const updateContactStatus = async (req, res) => {
  const { userId, newStatus } = req.body;
  try {
    const contact = await Contact.findById(userId);
    if (!contact) {
      return res.status(404).json({ message: "contact not found" });
    }
    if (newStatus) {
      contact.is_verified = !contact?.is_verified;
    }

    await contact.save();

    res
      .status(200)
      .json({ message: "user contact status updated successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
};

module.exports = {
  createContact,
  updateContactStatus,
  getContacts,
};
