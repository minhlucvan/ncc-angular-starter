# NCC Angular Starter

> An Angular starter kit featuring **Angular 4**, Modular, Lazy/pre - Loading, [Ahead of Time Compile](https://angular.io/guide/aot-compiler), [Auth 2](https://oauth.net/2/), [Ngrx](https://gist.github.com/btroncone/a6e4347326749f938510) , Services, Tests, E2E), [Karma](https://karma-runner.github.io/1.0/index.html), TypeScript, [@types](https://basarat.gitbooks.io/typescript/docs/styleguide/styleguide.html), [TsLint](https://palantir.github.io/tslint/), and [lodash](https://lodash.com/) By [#NCCSOFT](http://nccsoft.vn/).

<p align="center">
<img  src="https://lh6.googleusercontent.com/qYdlaOUk9-mFYmaEvBGeh2bMqtnIS03Isf_vPoo1F0N20SD6s_DEOPiRgCcRP0s6IuJyA7E3DDDr1j8=w1920-h935" alt="NCC Angular Starter" titlt="NCCSOFT" width="135" height="135"  />
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

<img src="https://cdn.pixabay.com/photo/2016/03/30/00/19/check-1289751_960_720.png" height="16" /> All file and folder are in used       
<img src="https://cdn.pixabay.com/photo/2016/03/30/00/19/check-1289751_960_720.png" height="16" /> Naming correct [naming convention](#naming-covention)              
<img src="https://cdn.pixabay.com/photo/2016/03/30/00/19/check-1289751_960_720.png" height="16" /> Pass all unit test      
<img src="https://cdn.pixabay.com/photo/2016/03/30/00/19/check-1289751_960_720.png" height="16" /> Has no tslint error    


## <img src="http://img.freepik.com/free-icon/web-programming-code-on-window_318-74341.jpg?size=338&ext=jpg" height="16"/> Commands

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
* [Routing](#routing)
* [State Management](#state-management)
* [Modules](#modules)
* [Entities](#entities)
* [Services](#service)
* [Components](#components)
* [@Types](#types)
* [License](#license)

## File Structure

```
project
├──README.md                                                                   * quick introduction
├──.angular-cli.json                                                           * agular cli config file    
├──.editorconfig                                                               * edittor config file
├──.gitignore                                                                  * git ignore config file
├──karma.conf.js                                                               * karma config file (testing)    
├──package-lock.json                                                           * npm packages change history
├──package.json                                                                * npm dependences config
├──protractor.conf.js                                                          * protractor config file (e2e testing)
├──tsconfig.json                                                               * typescript transpiler config file
├──tslint.json                                                                 * tslint config file (linting)   
│
└───e2e                                                                         * end to end testing scripts 
│  |...
|  └──
│   
└───src                                                                         * source files
|   ├───app                                                                     * app root
|   |   ├───app-routing
|   |   |    ├───app-routing.module.ts
|   |   |    └──custom.preloader.ts
|   |   |
|   |   ├───app-state
|   |   |    ├───services
|   |   |    ├───app-state.actions.ts
|   |   |    ├───app-state.module.ts
|   |   |    ├───app-state.reducers.ts
|   |   |    └──app.reducers.ts
|   |   |   
|   |   ├───auth
|   |   ├───constants
|   |   ├───containers
|   |   ├───entities
|   |   ├───gateway
|   |   ├───shared
|   |   ├───app.component.css
|   |   ├───app.component.html
|   |   ├───File app.component.ts
|   |   ├───app.module.ts
|   |   ├───app.module.ts
|   |   └──app.service.ts
|   |
|   ├───environments
|   |   ├───environment.prod.ts
|   |   └──environment.ts
|   |  
|   ├───assets
|   |   |...
|   |   └──
|   |
|   ├───favicon.ico
|   ├───index.html
|   ├───main.ts
|   ├───polyfills.ts
|   ├───styles.css
|   ├───File test.ts
|   ├───tsconfig.app.json
|   ├───tsconfig.spec.json
|   └──typings.d.ts
| 
```

## Getting Started

### The Ideas
### Dependencies
### Installing
### Running the app
### Testing and Linting

### Troubleshoting and Debugging

> Install [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) and see docs for instructions to launch Chrome 

The included `.vscode` automatically connects to the webpack development server on port `4200`.


## Configuration

## Coding Convention Giude

## Routing

## State Management

## Modules

## Entities

## Services

## Components

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