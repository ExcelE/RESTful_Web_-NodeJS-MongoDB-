import { addNewContact, getContacts, getContactWithID } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) =>{
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)

    //POST endpoint
    .post(addNewContact);

    app.route('/contact/:contactID')
    //get specific id
    .get(getContactWithID)
    // put request
    .put((req, res) =>
    res.send('PUT request successful!'))

    //delete request
    .delete((req, res) =>
    res.send('DELETE request successful!'));
}

export default routes;