// TODO: Include packages needed for this application
const inq = require('inquirer')
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
        type: 'confirm',
        name: 'confirmTableOfContents',
        message: 'Would you like to include a table of contents?',
        default:false

    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'List your table of contents.',
        when: ({confirmTableOfContents}) => {
            if(confirmTableOfContents) {
                return true
            }else {
                return false;
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
        type: 'input',
        name: 'license',
        message: 'List a license'
    },
    {
        type: 'input',
        name: 'badges',
        message: 'list any badges'
    },
    {
        tpye: 'input',
        name: 'features',
        message: 'list the features of your application or website'
    },
])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();