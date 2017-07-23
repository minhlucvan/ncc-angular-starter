# NCC Angular Starter

> An Angular starter kit featuring **Angular 4**, Modular, Lazy/pre - Loading, [Ahead of Time Compile](https://angular.io/guide/aot-compiler), [Auth 2](https://oauth.net/2/), [Ngrx](https://gist.github.com/btroncone/a6e4347326749f938510) , Services, Tests, E2E), [Karma](https://karma-runner.github.io/1.0/index.html), TypeScript, [@types](https://basarat.gitbooks.io/typescript/docs/styleguide/styleguide.html), [TsLint](https://palantir.github.io/tslint/), and [lodash](https://lodash.com/) By [#NCCSOFT](http://nccsoft.vn/).

<p align="center">
<img  src="http://nccsoft.vn/images/NCCSOFT_logo.png" alt="NCC Angular Starter" titlt="NCCSOFT" width="135" height="135"  />
<span>&nbsp;&nbsp;&nbsp;</span>
<img src="http://mobileangularui.com/assets/img/features/sec-angular-fig.png"  alt="NCC Angular Starter" title="Angular Starter" width="135" height="135" />
</p>

This seed repo serves as an Angular starter for staring new Agular 2+ App at [#NCCSOFT](). Using a Webpack and @angular/cli building our files and assisting with boilerplate. We're also Karma for our unit tests and Tslint for linting.

#### Last Update: 2017/7/21

## References

- [Angular official docs](https://angular.io/docs)
- [Rxjs official docs](https://github.com/Reactive-Extensions/RxJS/tree/master/doc)
- [lodash official docs](https://lodash.com/)
- [Available @Types](https://www.npmjs.com/~types)
- [Rangle's Angular Training Book](https://angular-2-training-book.rangle.io/)
- [Angular 2 Style Guide](https://angular.io/guide/styleguide)
- [Angular 2 Tutorual in Venammese](http://www.tiepphan.com/blog/)
- [Angular 2 in StackOverflow](https://stackoverflow.com/documentation/angular2/topics)
- [Aswesome List of Angular 2 Libraries & ecosystem](https://github.com/AngularClass/awesome-angular)

## Quick Start
### <img src="https://cdn4.iconfinder.com/data/icons/business-and-management/78/Business_management_strategy_office-14-256.png" height="16"/> install

> Clone/Download the repo then edit app.component.ts inside /src/app/app.component.ts

 ```
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://linktorepo.git project_name

# change directory to our repo
cd project_name


# install the repo with npm
npm install

# start the server
npm start
 ```
 go to http://0.0.0.0:4200 or http://localhost:4200 in your browser

### <img src="https://camo.githubusercontent.com/b6ba9075a54c192efc59bba53c92e7c23ec8cfe8/68747470733a2f2f63646e2e7261776769742e636f6d2f67696c626172626172612f6c6f676f732f653762316463323636366333646162653663313237366162643061373637623665626436616634332f6c6f676f732f6e6f64656a732d69636f6e2e737667" height="16"/> Environment

What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v6.x.x`+ (or `v7.x.x`) and NPM `3.x.x`+

> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file) 

Once you have those, you should install these globals with `npm install --global`:
* `@angular/cli` (`npm install --global @angular/cli`)
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `typescript` (`npm install --global typescript`)
* `tslint` (`npm install --global tslint`)

### <img src="https://code.visualstudio.com/images/favicon.ico" height="16"/> Editor

We have good experience using these editors:

* [Visual Studio Code - VSCODE](https://code.visualstudio.com/)
* [Webstorm](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

For the Coding standard, issues Resolving and Teamworking we highly recommended to use [#VSCODE](https://code.visualstudio.com/) lasted version, with [Tslint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint), [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons), [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) and [Angular2](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)  plugins installed, and believe me you gonna love it.

for further information please see: http://devboosts.com/2017/02/08/top-10-vs-code-extensions/

### <img src="https://git-for-windows.github.io/img/git_logo.png" height="16"/> Version control

We are using git for version control there are serverals git flow depends on projects or our clients, please check out [here](#) for further information.

before each commit make sure that yor code has passed the requrements the check list here:

✅ All file and folder are in used       
✅ Naming correct [naming convention](#naming-covention)              
✅ Pass all unit test      
✅ Has no tslint error    


## <img src="http://img.freepik.com/free-icon/web-programming-code-on-window_318-74341.jpg?size=338&ext=jpg" height="16"/> Commands

* run server 
```bash
ng s
```

* testing 
```bash
npm test
```

* lint
```bash
npm lint
```
@see: https://github.com/angular/angular-cli

## Table of Contents

* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [The Ideas](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Testing and Linting](#testing-and-linting)
    * [troubleshoting and debugging](#troubleshoting-and-debuging)
* [Configuration](#configuration)
* [Coding Convention Giude](#coding-convention-guide)
* [AoT Donts](#aot-donts)
* [Routing](#routing)
* [State Management](#state-management)
* [Modules](#modules)
* [Entities](#entities)
* [Services](#service)
* [Components](#components)
* [@Types](#types)
* [License](#license)

## File Structure

This is the file tructure of the template. we also use some symbols:

* **``</>``** to mark forder contains a angular 2 component
* **``{M}``** to mark forder contains a angular 2 module
* **``{I}``** to mark forder contains a angular 2 service 

```
project
├──README.md                                                          * quick introduction
├──.angular-cli.json                                                  * agular cli config file    
├──.editorconfig                                                      * edittor config file
├──.gitignore                                                         * git ignore config file
├──karma.conf.js                                                      * karma config file (testing)    
├──package-lock.json                                                  * npm packages change history
├──package.json                                                       * npm dependences config
├──protractor.conf.js                                                 * protractor config file (e2e testing)
├──tsconfig.json                                                      * typescript transpiler config file
├──tslint.json                                                        * tslint config file (linting)   
│
└───e2e                                                               * end to end testing scripts 
│  |...
|  └──
│   
└───src                                                                * source files
|   ├───app                                                            * app root
|   |   ├───app-routing                                                * app routing module  
|   |   |    ├───app-routing.module.ts                                 * routing preloader
|   |   |    └───custom.preloader.ts                                   
|   |   |
|   |   ├───app-state                                                  * app state module
|   |   |    └───services                                              * services
|   |   |        └───app-state {I}                                     * app-state service
|   |   |    
|   |   |    ├───app-state.actions.ts                                  * define set state acctions
|   |   |    ├───app-state.module.ts                                   * define app state module
|   |   |    ├───app-state.reducers.ts                                 * define app state reducers
|   |   |    └───app.reducers.ts                                       * define app root reducer
|   |   |   
|   |   ├───auth                                                       * authenticate module
|   |   |    ├───guards                                                * define guards
|   |   |    |   ├───auth                                              * guard check user has login
|   |   |    |   ├───permission                                        * guards check user has permisstion to visit a router
|   |   |    |   └───index.ts                                          * export all guards here
|   |   |    |
|   |   |    ├───services                                              * define authenticate services
|   |   |    |   └───auth {I}
|   |   |    |   
|   |   |    └───auth.module.ts                                        * define auth module
|   |   |    
|   |   ├────constants                                                 * place to store app constants
|   |   |    ├───api.constants.ts                                      * constants use for api call
|   |   |    ├───auth..constants.ts                                    * constants for state management
|   |   |    ├───state..constants.ts
|   |   |    ├───ui.constants.ts                                       * constants for ui  
|   |   |    └───index.ts                                              * export all constants   
|   |   |    
|   |   ├───containers                                                 * where to place sub modules   
|   |   |    ├───error                                                 * module for error pages
|   |   |    |   ├───page-not-found <>                                 * page not found component                       
|   |   |    |   ├───error-routing.module.ts                           * error routing
|   |   |    |   └───error.module.ts                                   * define error module   
|   |   |    |
|   |   |    ├───home                                               * module for home page
|   |   |    |   ├───home.compomemt.ts                              * home page component
|   |   |    |   ├───home.compoent.html                             * template for home component
|   |   |    |   ├───home.compoent.scss                             * style for home component 
|   |   |    |   ├───home-routing.module.ts                         * define home routing module
|   |   |    |   └───home.module.ts                                 * define home module 
|   |   |    |
|   |   |    └───login                                              * module for login page 
|   |   |        ├───compoents                                      * define component here
|   |   |        |   └───login-from </>                             * login form
|   |   |        |
|   |   |        ├───home.compomemt.ts                              * define home page
|   |   |        ├───home.compoent.html                             * template for home page
|   |   |        ├───home.compoent.scss                             * style for home page
|   |   |        ├───home-routing.module.ts                         * home routing
|   |   |        └───home.module.ts                                 * define home module
|   |   |    
|   |   ├───entities                                                * place to put our app interface and models
|   |   |   ├───app-state                                           * define app state
|   |   |   |   ├───app-state.interface.ts                             
|   |   |   |   ├───state.interface.ts
|   |   |   |   └───app-state.model.ts
|   |   |   |
|   |   |   ├───auth-state                                          * define auth state
|   |   |   |   ├───auth.interface.ts
|   |   |   |   └───auth-state.model.ts
|   |   |   |
|   |   |   ├───permission                                          * define permission
|   |   |   |   ├───permission.interface.ts
|   |   |   |   └───permission-state.model.ts
|   |   |   |
|   |   |   ├───sub-bag                                              * define sub bag
|   |   |   |   ├───sub.interface.ts
|   |   |   |   ├───sub-bag.interface.ts
|   |   |   |   └───sub-bag.model.ts
|   |   |   |
|   |   |   ├───ui-state                                          * define ui state
|   |   |   |   ├───ui-state.interface.ts
|   |   |   |   └───ui-state.model.ts
|   |   |   |
|   |   |   ├───user                                              * define user
|   |   |   |   ├───user.interface.ts
|   |   |   |   └───user.model.ts
|   |   |   |
|   |   |   └───index.ts                                           * group and export our models   
|   |   | 
|   |   ├───gateway                                                * an http wraper  for call http api   
|   |   |   ├───services
|   |   |   |   └───api {i}                                        * api service
|   |   |   | 
|   |   |   └───gateway.module.ts                                  * define gateway module 
|   |   |   
|   |   ├───shared                                                 * share module for shared things bettweb whole app
|   |   |   ├───components                                         * shared componets put here
|   |   |   |   ├───loading </>                                    * loading spiner
|   |   |   |   ├───main-layout </>                                * main layout    
|   |   |   |   ├───simple--layout </>                             * simple layout
|   |   |   |   └───index.ts                                       * export all shared components
|   |   |   |   
|   |   |   ├───pipes                                              * shared pipe
|   |   |   |   └───indeex.ts                                      * export all pipes
|   |   |   |   
|   |   |   ├───services                                           * shared services 
|   |   |   |   ├───alert {I}                                      * alert service
|   |   |   |   ├───busy  {I}                                      * alert service
|   |   |   |   └───index.ts                                       * export all service
|   |   |   |   
|   |   |   └───shared.module.ts                                   * define shared module
|   |   |   
|   |   ├───app.component.css                                      * app component style
|   |   ├───app.component.html                                     * app component template
|   |   ├───app.component.ts                                       * app component
|   |   ├───app.module.ts                                          * root module                          
|   |   └───app.service.ts                                         * define app module
|   |
|   ├───environments                                               * environment fondig
|   |   ├───environment.prod.ts                                    * use in production
|   |   └───environment.ts                                         * use in development
|   |  
|   ├───assets                                                     * bundle assets
|   |   |...
|   |   └───
|   |
|   ├───favicon.ico                                                 * favirite icon
|   ├───index.html                                                  * start html
|   ├───main.ts                                                     * typescript entry point
|   ├───polyfills.ts                                                * polyfill script for differerent browser (IE)
|   ├───styles.scss                                                 * global style
|   ├───test.ts                                                     * testing entry point
|   ├───tsconfig.app.json                                           * pypescript config for app
|   ├───tsconfig.spec.json                                          * test for tsconfig
|   └───typings.d.ts                                                * declare uor global custom types
| 
```

## Getting Started

### The Ideas

We built this template in order to create a standard for angular 2+ applications in serverals edges like file structure, coding conventions, dependences, tools and version control.

We trying to resolve problems of an Enterprise front end applications such as perfoermace, team working, scalability and state predicable.

This is not final standard, any  refactor and idea to improve things are welcome.

### Testing and Linting

We hightly recommened unit testings and tslint before each commit.

Keep in mind: Code for maintainers.

### Debugging

> Install [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) and see docs for instructions to launch Chrome 

The included `.vscode` automatically connects to the webpack development server on port `4200`.

please see [How to debug an Angular application with Chrome and VS Code](https://offering.solutions/blog/articles/2016/10/16/how-to-debug-an-angular-application-with-chrome-and-vs-code/)

## Configuration

config app prefix: `angular-cli.json`.

## Coding Convention

https://angular.io/guide/styleguide

## AoT Donts

The following are some things that will make AoT compile fail.

Don’t use require statements for your templates or styles, use styleUrls and templateUrls, the angular2-template-loader plugin will change it to require at build time.
Don’t use default exports.
Don’t use form.controls.controlName, use form.get(‘controlName’)
Don’t use control.errors?.someError, use control.hasError(‘someError’)
Don’t use functions in your providers, routes or declarations, export a function and then reference that function name
@Inputs, @Outputs, View or Content Child(ren), Hostbindings, and any field you use from the template or annotate for Angular should be public

@see: https://github.com/rangle/angular-2-aot-sandbox

## Routing

Routing root is in `app-routing.module.ts` we are using preload as default, so if you want to have new route you must define new module and using route module `forChild` to de fine child route. 

Beside use for navigate betwen application pages we also can use route for represents page's state like show popup or show/hide specific components so that use can visit page in specific state, and we can easy to changes betwen states;

learn more: [Give your modals URL address with Auxiliary Routes in Angular](https://netbasal.com/give-your-modals-url-address-with-auxiliary-routes-in-angular-eb76497c0bca)

## State Management

We are using [@ngrx](https://github.com/ngrx) in core (app-state module) so ngrx are recomend way to manage state.

let's learn why :https://angular-2-training-book.rangle.io/handout/state-management/

## Modules

Each child module is and stand alone medule please try to reduce couped betwen modules.

Each module has own it's depencences, child modules and components.

Each module has it own route module, if they need an router.

## Entities

Entities is base objects of application like state, business models etc. 

Each entity has and interface and an model to implements behavior.

We has 2 types of entity Injectable (sigleton) model  and UnInjectable entity.

## Services

Agular 2 services.

## Components

Agular 2 components.

We use SCSS to style components.


## @Types

> When you include a module that doesn't include Type Definitions inside of the module you can include external Type Definitions with @types

list of available types [here](https://www.npmjs.com/~types);

i.e, to have youtube api support, run this command in terminal: 
```shell
npm i @types/youtube @types/gapi @types/gapi.youtube
``` 
In some cases where your code editor doesn't support Typescript 2 yet or these types weren't listed in ```tsconfig.json```, add these to **"src/custom-typings.d.ts"** to make peace with the compile check: 
```es6
import '@types/gapi.youtube';
import '@types/gapi';
import '@types/youtube';
```

### Custom Type Definitions

When including 3rd party modules you also need to include the type definition for the module
if they don't provide one within the module. You can try to install it with @types

```
npm install @types/node
npm install @types/lodash
```

If you can't find the type definition in the registry we can make an ambient definition in
this file for now. For example

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```


If you're prototyping and you will fix the types later you can also declare it as type any

```typescript
declare var assert: any;
declare var _: any;
declare var $: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```


## License

``Copyright © 2017 NCCSOFT Viet Nam``

# Making our next project be Awesome <img src="https://cdn.pixabay.com/photo/2014/04/03/11/58/rocket-312767_960_720.png" width="36" />

by [@minhlucvan](https://github.com/minhlucvan) with <img src="http://cliparting.com/wp-content/uploads/2016/05/Heart-clipart-free-clipart-image.jpg" width="16" /> and  <img src="https://openclipart.org/image/2400px/svg_to_png/216598/mugsarap.png" width="16" />