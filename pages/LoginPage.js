
 export class LoginPage{
    // Constructor to initialize the page and locators
    constructor(page){
        // Store the page object for later use 
        this.page = page;
        
        // Define locators for the username input, password input, and login button
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });     

    }


    // Method to navigate to the login page
    async goto(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    // Method to enter username
    async enterUsername(username){
        await this.usernameInput.fill(username);
    }

    // Method to enter password
    async enterPassword(password){
        await this.passwordInput.fill(password);
    }

    // Method to click the login button
    async clickLoginButton(){
        await this.loginButton.click();
    }

    // Method to perform login
    async login(username, password){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

}

module.exports = { LoginPage } ;

