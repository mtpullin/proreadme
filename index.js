// TODO: Include packages needed for this application
const inq = require('inquirer')
const fs = require('fs')
const readmeInput = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input

const questions = () => {
    return inq.prompt([
        {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?(Required)',
        validate: titleInput => {
            if(titleInput){
                return true;
            }else {
                console.log('Please enter a title')
                return false
            }
        }  
    },
    
    {
        type:'input',
        name: 'description',
        message: 'Enter a description of your project(Required)',
        validate: descriptionInput => {
            if(descriptionInput){
                return true
            }else{
                console.log('Please describe your project.')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this project used for? Provide screenshots as necessary',
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Name any collaborators or third-party assets'
    },
    {
        type: 'list',
        name: 'license',
        message: 'List a license',
        choices: ['MIT',  'GNU AGPLv3','GNU GPLv3', 'Unlicense']
    },
    
    {
        type: 'input',
        name: 'contributions',
        message: 'list anyone who helped contribute to the project'
    },

    {
        type: 'input',
        name: 'github',
        message: 'input github user name'
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your email for contact information'
    }
])
};

// TODO: Create a function to write README file
const writeToFile = (data) => {
    return new Promise((resolve, reject) => {
        console.log(data)
        fs.writeFile("./utils/readme.md", data, err =>{
            if(err){
                reject(err)
                return;
            }
                resolve({
                    ok: true,
                    message:'file created'
            })
        })
    })
}

// TODO: Create a function to initialize app
 
    questions()
    .then((userData) =>{
    return readmeInput(userData)
    })
    .then((userInput) =>{
    return writeToFile(userInput)})
    


