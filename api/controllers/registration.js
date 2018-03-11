const Student = require('../helpers/student');
const NextOfKin = require('../helpers/next-of-kin');
const Documents = require('../helpers/documents');

module.exports = {
    register: (req, res) => {

        const body = req.body;
        const files = req.files;

        const studentObj = {
            name: body.name,
            surname: body.surname,
            title: body.title,
            gender: body.gender,
            email: body.email,
            phone: body.phone,
            address: body.address,
            id: body.idnumber,
            password: body.password
        };
        const nextOfKinObj = {
            name: body['nok-name'],
            surname: body['nok-surname'],
            phone: body['nok-phone'],
            work_address: body['nok-work-address'],
            physical_address: body['nok-physical-address'],
            relationship: body['nok-relationship'],
            email: studentObj.email
        };
        const student = new Student(studentObj);

        student.save((err) => {
           if (err) {
               res.json({message: 'There was an error saving student' + err})
           } else {
               const nextOfKin = new NextOfKin(nextOfKinObj);

               // save next of kin
               nextOfKin.save((err) => {
                   if (err) {
                       console.log('ERRR: saveing next of kin');
                   }
               });

               // create documents links
               if (files) {
                   const documentsObj = {};

                   const idCopyName = files['id-copy'].name;
                   const idCopyFile = files['id-copy'];
                   const proofOfRegName = files['proof-of-reg'].name;
                   const proofOfRegFile = files['proof-of-reg'];
                   const nextOfKinIdCopyName = files['nok-id-copy'].name;
                   const nextOfKinIdCopyFile = files['nok-id-copy'];

                   documentsObj.id_copy_url = 'uploads/' + idCopyName;
                   documentsObj.proof_of_reg_url = 'uploads/' + proofOfRegName;
                   documentsObj.next_of_kin_id_copy_url = 'uploads/' + nextOfKinIdCopyName;
                   documentsObj.email = studentObj.email;

                   idCopyFile.mv('./uploads/' + idCopyName, (err) => {
                       if (!err)
                           documentsObj.id_copy_url = 'uploads/' + idCopyName;
                   });

                   proofOfRegFile.mv('./uploads/' + proofOfRegName, (err) => {
                       if (!err)
                           documentsObj.proof_of_reg_url = 'uploads/' + proofOfRegName;
                   });

                   nextOfKinIdCopyFile.mv('./uploads/' + nextOfKinIdCopyName, (err) => {
                       if (!err)
                           documentsObj.next_of_kin_id_copy_url = 'uploads/' + nextOfKinIdCopyName;
                   });

                   const documents = new Documents(documentsObj);
                   documents.save((err) => {
                       if (err)
                           console.log('ERRR: unable to save documents');
                   })
               }
               res.json({message: 'Data saved!!!'})
           }
        });
    }
};