const { findOrUpdate } = require("../../utils/findOrUpdate");
const { sendUserUpdateEmail } = require("../../config/mailer");

const putUser = async ({ id, username, email, password, telefono, image_url }) => {
    const User = {
        username: username,
        email: email,
        password: password,
        telefono: telefono,
        image_url: image_url
    };

    const { record, updated } = await findOrUpdate('users', { id: id }, { email: email }, User);

    if (updated === true) {
        await sendUserUpdateEmail(email, username);

        return record;
    } else {
        return false;
    }
};

module.exports = {
    putUser
};
