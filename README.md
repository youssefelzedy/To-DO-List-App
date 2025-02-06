# ProjectManager

This is a simple project management application built with TypeScript. It allows users to add projects and categorize them as active or finished.

## Project Structure

- `src/app.ts`: Main TypeScript file containing the application logic.
- `index.html`: HTML file containing the structure of the application.
- `app.css`: CSS file containing the styles for the application.
- `tsconfig.json`: TypeScript configuration file.
- `package.json`: Node.js package configuration file.

## Classes

### Project

Represents a project with the following properties:
- `id`: Unique identifier for the project.
- `title`: Title of the project.
- `description`: Description of the project.
- `people`: Number of people involved in the project.
- `status`: Status of the project (active or finished).

### State

Generic state management class with the following methods:
- `addListener(listenerFn: Listener<T>)`: Adds a listener function to the state.

### ProjectState

Manages the state of projects and extends the `State` class. It has the following methods:
- `getInstance()`: Returns the singleton instance of the `ProjectState` class.
- `addProject(title: string, description: string, people: number)`: Adds a new project to the state.

### Component

Abstract base class for UI components with the following methods:
- `configure()`: Abstract method to configure the component.
- `renderContent()`: Abstract method to render the content of the component.

### ProjectItem

Represents a single project item. (Currently not implemented)

### ProjectList

Represents a list of projects with the following methods:
- `configure()`: Configures the project list by adding a listener to the project state.
- `renderContent()`: Renders the content of the project list.
- `renderProjects()`: Renders the projects in the list.

### ProjectInput

Represents the project input form with the following methods:
- `configure()`: Configures the project input form by adding an event listener for form submission.
- `renderContent()`: Renders the content of the project input form.
- `gatherUserInput()`: Gathers and validates user input from the form.
- `clearInputs()`: Clears the input fields of the form.
- `submitHandler(event: Event)`: Handles form submission and adds a new project to the state.

## Decorators

### autobind

A decorator to automatically bind methods to the class instance.

## Validation

### Validatable

Interface for validatable input fields with the following properties:
- `value`: The value of the input field.
- `required`: Whether the input field is required.
- `minLength`: Minimum length for string input.
- `maxLength`: Maximum length for string input.
- `min`: Minimum value for number input.
- `max`: Maximum value for number input.

### validate

Function to validate input fields based on the `Validatable` interface.

## Getting Started

1. Install dependencies:
   ```sh
   npm install