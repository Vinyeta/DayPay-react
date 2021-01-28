<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! : D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** raulsalcedo03, DayPay-react, twitter_handle, email, DayPay, project_description
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/raulsalcedo03/DayPay-react">

    <img src="images/logo.png" alt="Logo" width="400" height="135">

  </a>

  <h3 align="center">DayPay</h3>

  <p align="center">

    Plataforma moneybeam.
    <br />
    <a href="https://github.com/raulsalcedo03/DayPay-react"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/raulsalcedo03/DayPay-react">View Demo</a>
    ·
    <a href="https://github.com/raulsalcedo03/DayPay-react/issues">Report Bug</a>
    ·
    <a href="https://github.com/raulsalcedo03/DayPay-react/issues">Request Feature</a>

  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>

    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <!--<li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="center">
  <img src="images/screenshot.png" alt="screenshot">
</p>

### Built With

* [React](https://reactjs.org/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm

  

``` sh
  npm install npm@latest -g
  ```


* docker


``` sh
https://docs.docker.com/engine/install/ubuntu/
```

### Installation

1. Clone the repo

   

``` sh
   git clone https://github.com/raulsalcedo03/DayPay-react.git
   ```

2. Install NPM packages

   

``` sh
   npm install
   ```

3. Clone the backend repo

   

``` sh
   git clone https://github.com/raulsalcedo03/DayPay-node.git
   ```

4. Install backend NPM packages

   

``` sh
   npm install
   ```

5. Setup MongoDB image using docker:

   

``` sh
   sudo docker run -d -p 127.0.0.1:27017:27017 --name DayPay-node \
    -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
    -e MONGO_INITDB_ROOT_PASSWORD=secret \
    mongo
   ```

6. Run the mongo image in docker:


```sh
sudo docker start DayPay-node
```

7. Start the backend server:


```sh
npm start
```

8. Start the frontend server:


```sh
npm start
```


   


<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/raulsalcedo03/DayPay-react/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Raul Salcedo - raul.salcedo03@hotmail.com
Marcos Andaluz de Rosas - mandaluzr@hotmail.com
Felipe Meira - f.zende@gmail.com
Richard Perdomo - richard.perdomo121@gmail.com
Adrià Santos - adria@santos.cat
Alejo Viñeta - avinetam@gmail.com

Project Link: [https://github.com/raulsalcedo03/DayPay-react](https://github.com/raulsalcedo03/DayPay-react)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

* [Readme template](https://github.com/othneildrew/Best-README-Template)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/raulsalcedo03/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/raulsalcedo03/DayPay-react/contributors
[forks-shield]: https://img.shields.io/github/forks/raulsalcedo03/repo.svg?style=for-the-badge
[forks-url]: https://github.com/raulsalcedo03/DayPay-react/network/members
[stars-shield]: https://img.shields.io/github/stars/raulsalcedo03/repo.svg?style=for-the-badge
[stars-url]: https://github.com/raulsalcedo03/DayPay-react/stargazers
[issues-shield]: https://img.shields.io/github/issues/raulsalcedo03/repo.svg?style=for-the-badge
[issues-url]: https://github.com/raulsalcedo03/DayPay-react/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/raulsalcedo03
