'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the HTML, CSS, JavaScript with ${chalk.red('firestore')} generator!`)
    );

    const prompts = await this.prompt([{
        type: "input",
        name: "name",
        message: "Your Project Name",
        default: this.appname
      },
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Are you ready?',
        default: true
      }
    ]);

    this.log("App Name:", prompts.name);
    this.log("Ready?", prompts.someAnswer);

    // return this.prompt(prompts).then(props => {
    //   // To access props later use this.props.someAnswer;
    //   this.props = props;
    //   this.log("props_name", this.props.name);
    //   this.log("props_someAnswer", this.props.someAnswer);
    // });
  }

  writing() {
    this.fs.copy(
      this.templatePath('dist'), // It copies a folder as well.
      this.destinationRoot()
    );

  }

  install() {
    this.installDependencies();
  }
};
