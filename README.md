# Project Name

Raha Beach Denis

## Getting Started

These instructions will guide you on how to get the project up and running on your local machine.

### Prerequisites

- Git (https://git-scm.com/)
- Node.js (https://nodejs.org/)
- Yarn (https://yarnpkg.com/)

### Installation

1. Clone the repository using the following command:

```shell
git clone https://github.com/munaashe/raha-beach-denis.git
```

2. Create an environment file named `env.local` in the root folder of the project and add the following environment variable:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

3. Install the project dependencies by running the following command:

```shell
yarn install
```

### Starting the JSON Server

1. Start the JSON server by running the following command:

```shell
yarn serve
```

### Starting the Development Environment

1. Open another terminal and start the development environment by running the following command:

```shell
yarn dev
```

2. The project will now be running at `http://localhost:3000` in your browser.

## Live Environment

The live environment of this project can be accessed at [https://raha-denis.vercel.app](https://raha-denis.vercel.app).

## Justifications

### Next.js

Next.js is a powerful framework for building React applications. It provides a wide range of features and optimizations that enhance the development process. Some of the reasons for using Next.js in this project include:

- Server-side rendering (SSR) for improved performance and SEO.
- Automatic code splitting for faster page loading.
- API routes for building serverless functions.
- File-based routing for easy navigation setup.
- Rich ecosystem and active community support.

### TypeScript

TypeScript is a statically-typed superset of JavaScript that brings type safety and improved developer experience to the project. Some of the reasons for using TypeScript in this project include:

- Early detection of errors and type-related issues.
- Improved code maintainability and readability.
- Enhanced autocompletion and IntelliSense.
- Better refactoring capabilities.
- Seamless integration with popular tools and libraries.

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework that provides a set of highly customizable and low-level utility classes. Some of the reasons for using Tailwind CSS in this project include:

- Rapid prototyping and development with pre-defined utility classes.
- Easy customization and theming options.
- Responsive design capabilities out of the box.
- Efficient and optimized CSS output.
- Large community and extensive documentation.


### Language Switching with Next-Intl

Next-Intl is a localization library for Next.js applications that provides a seamless way to handle internationalization and language switching. Here are the justifications for using Next-Intl in this project:

- **Multi-language Support**: Next-Intl allows for easy management of multiple languages within the application. It provides a convenient way to define translations and switch between different language versions of the content.

- **Simplified Localization**: Next-Intl simplifies the process of localizing the application by providing a straightforward API for defining and accessing translations. It abstracts away the complexities of manually managing language files and provides a centralized place for managing translations.

- **Dynamic Language Switching**: Next-Intl enables dynamic language switching without requiring a full page reload. This means that users can switch between languages on the fly, and the content will update instantly without losing the current state or context of the application.

- **Pluralization and Formatting**: Next-Intl handles complex language features such as pluralization and formatting of numbers, dates, and currencies. It ensures that the application can display localized content correctly based on the user's language preferences.

- **SEO-friendly**: Next-Intl ensures that the localized content is properly indexed by search engines. It generates separate URLs for each language version of the page, allowing search engines to crawl and index the content specific to each language.

- **Flexible and Scalable**: Next-Intl provides a flexible architecture that allows for easy integration with other localization tools and libraries. It can be extended and customized to meet the specific requirements of the project, making it suitable for both small and large-scale applications.

By using Next-Intl, this project achieves a seamless and user-friendly language switching experience, ensuring that the application can cater to a global audience with different language preferences while maintaining a consistent and localized user interface.