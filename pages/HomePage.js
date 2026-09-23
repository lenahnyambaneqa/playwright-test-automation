 class HomePage{

    constructor(page){

        this.page=page;
        this.searchBox = page.getByRole('textbox', { name: 'Search' });
        this.searchButton = page.locator('#search').getByRole('button');
        //this.headingValidation = page.getByRole('heading', {name:'Search - MacBook'});
        

    }

    async goto() {

        await this.page.goto('https://tutorialsninja.com/demo/', 
            {
          waitUntil: 'domcontentloaded',
           timeout: 60000 }
        );
    }

    async searchFunction(searchWord){
        await this.searchBox.fill(searchWord);

    }

    async clickSearchButton(){

        await this.searchButton.click();

    }

    

    async search(searchWord){
        await this.searchFunction(searchWord);
        await this.clickSearchButton();
        //await this.validatePage();
    }

    
}

module.exports = HomePage;