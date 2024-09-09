// import {
//   FileText,
//   Heading1Icon,
//   Images,
//   RectangleHorizontal,
// } from 'lucide-react';
// import { DomStateElement } from './dom';

// interface Component {
//   id: string;
//   name: string;
//   icon: any;
//   element: Omit<DomStateElement, 'id'>;
// }

// export const components: Component[] = [
//   {
//     id: 'core_1',
//     name: 'Box',
//     icon: RectangleHorizontal,
//     element: {
//       children: [],
//       element: 'div',
//       content: 'this is the box',
//       props: {
//         style: {
//           width: '100px',
//           height: '100px',
//           ['background-color']: 'white',
//           border: 'none',
//           ['border-radius']: '0px',
//           ['box-shadow']: 'none',
//           ['margin-top']: '0px',
//           ['margin-left']: '0px',
//           ['margin-right']: '0px',
//           ['margin-bottom']: '0px',
//           ['padding-top']: '0px',
//           ['padding-left']: '0px',
//           ['padding-right']: '0px',
//           ['padding-bottom']: '0px',
//           ['flex-direction']: 'row',
//           ['font-size']: '16px',
//           ['justify-content']: 'flex-start',
//           ['align-items']: 'flex-start',
//           ['flex-wrap']: 'nowrap',
//           ['flex-grow']: '0',
//           ['flex-shrink']: '1',
//           ['flex-basis']: 'auto',
//           ['text-align']: 'left',
//           ['color']: 'black',
//         },
//       },
//     },
//   },
//   {
//     id: 'core_2',
//     name: 'Text',
//     icon: FileText,
//     element: {
//       content: 'this is the text',
//       children: [],
//       element: 'u',
//       props: {
//         style: {
//           color: 'black',
//         },
//       },
//     },
//   },
//   {
//     id: 'core_3',
//     name: 'Picture',
//     icon: Images,
//     element: {
//       children: [],
//       element: 'img',
//       props: {
//         style: {
//           width: '100px',
//           height: '100px',
//         },
//         attributes: {
//           src: 'https://via.placeholder.com/150',
//         },
//       },
//     },
//   },
//   {
//     id: 'core_4',
//     name: 'Heading',
//     icon: Heading1Icon,
//     element: {
//       children: [],
//       content: 'some content',
//       element: 'h1',
//       props: {
//         style: {
//           color: 'black',
//         },
//       },
//     },
//   },
//   {
//     id: 'core_5',
//     name: 'Colour',
//     icon: FileText,
//     element: {
//       children: [],
//       content: 'some content',
//       element: 'i',
//       props: {
//         style: {
//           color: 'black',
//         },
//       },
//     },
//   },
// ];


interface Component {
  id: string;
  name: string;
  html: string;
}

export const components: Component[] = [
  {
    id: "template_1",
    name: "Template 1",
    html: `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>TEST Website</title>
        <meta name="description" content="Test website description">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
        <h1 class="container mx-auto px-4 py-8 text-2xl font-bold flex justify-center"  id="template1-heading">Hello, This is Template 1 Website built for token <span id="token_name">XYZ</span> </h1>
        <img id="template1-image" src="https://st3.depositphotos.com/5906102/14454/v/450/depositphotos_144548047-stock-illustration-crypto-currency-bitcoin-golden-symbol.jpg" alt="image" class="rounded-lg shadow-md mx-auto h-48 "/>
    </body>
</html>
`,
  },
  {
    id: "template_2",
    name: "Template 2",
    html: `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Sample Template 2</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-100">
        <div class="container mx-auto px-4 py-8">
            <h1 id="template2-heading" class="text-4xl font-bold mb-4">Welcome to Template 2!</h1>
            <p id="template2-text" class="text-lg mb-4">This is a sample template created for another example.</p>
            <img id="template2-image" src="https://via.placeholder.com/300x150" alt="Placeholder image" class="rounded-lg shadow-md" />
        </div>
    </body>
</html>
`,
  },
  {
    id: "template_3",
    name: "Template 3",
    html: `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Template 3</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-blue-50">
        <div class="container mx-auto px-4 py-8">
            <h1 id="template3-heading" class="text-5xl font-extrabold text-blue-600 mb-6">Welcome to Template 3!</h1>
            <p id="template3-text" class="text-xl text-gray-700 mb-6">This template demonstrates flexibility and creativity.</p>
            <img id="template3-image" src="https://via.placeholder.com/400x200" alt="Placeholder image" class="rounded-xl shadow-lg" />
        </div>
    </body>
</html>
`,
  },
  {
    id: "template_4",
    name: "Template 4",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Card-based UI</title>
    <style>
        :root {
            --primary-color: #3498DB;
            --secondary-color: #2ECC71;
            --text-color: #333;
            --background-color: #F4F4F4;
        }
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--background-color);
            color: var(--text-color);
            line-height: 1.6;
        }
        header {
            background-color: var(--primary-color);
            color: white;
            text-align: center;
            padding: 1rem;
        }
        nav {
            background-color: white;
            padding: 1rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        nav ul {
            list-style-type: none;
            padding: 0;
            display: flex;
            justify-content: center;
        }
        nav ul li {
            margin: 0 15px;
        }
        nav ul li a {
            text-decoration: none;
            color: var(--primary-color);
            font-weight: bold;
            transition: color 0.3s ease;
        }
        nav ul li a:hover {
            color: var(--secondary-color);
        }
        main {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 2rem;
        }
        .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
            overflow: hidden;
            transition: transform 0.3s ease;
            width: calc(33% - 1rem);
        }
        .card:hover {
            transform: translateY(-5px);
        }
        .card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .card-content {
            padding: 1.5rem;
        }
        .card-content h3 {
            margin-top: 0;
            color: var(--primary-color);
        }
        footer {
            background-color: var(--primary-color);
            color: white;
            text-align: center;
            padding: 1rem;
            margin-top: 2rem;
        }
        @media (max-width: 768px) {
            .card {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Modern Card-based UI</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <div class="card-container">
            <div class="card">
                <img src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" alt="Project 1">
                <div class="card-content">
                    <h3>Project 1</h3>
                    <p>This is a description of Project 1. It was an exciting endeavor that showcased our skills in web development.</p>
                </div>
            </div>
            <div class="card">
                <img src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" alt="Project 2">
                <div class="card-content">
                    <h3>Project 2</h3>
                    <p>Project 2 was a challenging mobile app development project that pushed our creativity to new limits.</p>
                </div>
            </div>
            <div class="card">
                <img src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" alt="Project 3">
                <div class="card-content">
                    <h3>Project 3</h3>
                    <p>For Project 3, we created a robust backend system that could handle millions of requests per second.</p>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <p>&copy; 2024 Modern Card-based UI. All rights reserved.</p>
    </footer>
</body>
</html>`,
  },
];