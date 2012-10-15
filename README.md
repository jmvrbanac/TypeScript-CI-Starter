TypeScript Continuous Integration Starter Project
=========
*Utilizes Require.JS for AMD loading*

### Requirements for building
 * gradle 1.0+
 * node and the TypeScript node module
 * To get install TypeScript on node: *npm install -g typescript*

### Changing build to use a different starting source file
 * Open *build.gradle*
 * Change *"mainModule"* on line #4 from "Sample" to the name of your new source file

### Running Unit Tests
 * Command: gradle build or Open "index.html" in your browser of choice

### Removing all generated js files
 * Command: *gradle clean*

### Creating Minified Javascript Library
 * Command: gradle minify
 * Resulting file is located within the *target* folder
