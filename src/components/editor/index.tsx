import { useEffect, useRef, useState, useCallback } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import { PenTool, Undo, Redo } from "lucide-react"; 
//@ts-ignore
import plugin from "grapesjs-tailwind";
import { components } from "./config"

const Editor: React.FC = () => {
  const editorRef = useRef<any>(null);
  const [templates, setTemplates] = useState(components);
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<any>(null);

  useEffect(() => {
    editorRef.current = grapesjs.init({
      container: "#gjs",  // Target the correct container
      fromElement: true,
      width: "100%",
      height: "100%",
      plugins: [plugin],
      pluginsOpts: {
        [plugin]: {},
      },
      storageManager: false, // Disable storage manager
      styleManager: {
        sectors: [
          {
            name: 'Typography',
            open: false,
            buildProps: ['font-size', 'color', 'text-align', 'font-family', 'line-height', 'letter-spacing'],
            properties: [
              { name: 'Font Size', property: 'font-size' },
              { name: 'Text Color', property: 'color' },
              { name: 'Text Align', property: 'text-align' },
              { name: 'Font Family', property: 'font-family' },
              { name: 'Line Height', property: 'line-height' },
              { name: 'Letter Spacing', property: 'letter-spacing' },
            ]
          },
          {
            name: 'Decorations',
            open: false,
            buildProps: ['background-color', 'border', 'border-radius', 'box-shadow'],
            properties: [
              { name: 'Background Color', property: 'background-color' },
              { name: 'Border', property: 'border' },
              { name: 'Border Radius', property: 'border-radius' },
              { name: 'Box Shadow', property: 'box-shadow' },
            ]
          }
        ]
      },
      
    });

    const editor = editorRef.current;

    // Event listener for selected component
    editor.on("component:selected", () => {
      const selected = editor.getSelected();
      const tagName = selected.get("tagName");

      if (
        ["p", "span", "h1", "h2", "h3", "h4", "nav", "button"].includes(tagName)
      ) {
        setSelectedComponent(selected);
      } else {
        setSelectedComponent(null);
      }
    });

    editor.on("block:drag:stop", () => {
      console.log("Block dropped");
    });
  }, []);

  const applyTemplate = (templateId: string) => {
    const template = templates.find((t) => t.id === templateId);
    if (template) {
      if (editorRef.current) {
        editorRef.current.setComponents(template.html);
      }
      setActiveTemplate(templateId);
    } else {
      console.error("Template not found for id:", templateId);
    }
  };

  const exportHtml = useCallback(() => {
    if (editorRef.current) {
      const templateHtml = editorRef.current.getHtml();
      const templateCss = editorRef.current.getCss();

      const html = `
        <html>
          <head>
            <style>${templateCss}</style>
          </head>
          <body>${templateHtml}</body>
        </html>
      `;

      const blob = new Blob([html], { type: "text/html" });
      const link = document.createElement("a");

      link.href = URL.createObjectURL(blob);
      link.download = "custom-template.html";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, []);

  const handleUndo = () => {
    if (editorRef.current) {
      editorRef.current.runCommand("core:undo");
    }
  };

  const handleRedo = () => {
    if (editorRef.current) {
      editorRef.current.runCommand("core:redo");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900 text-white">
      <div className="w-full p-2 bg-gray-950 flex gap-4 justify-between">
        <div className="flex items-center gap-2">
          <PenTool size={30} color="white" />
          <div className="text-xl font-bold">Website Builder</div>
        </div>

        {/* Section for template buttons */}
        <div className="flex gap-2">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => applyTemplate(template.id)}
              className={`px-2 py-2 text-sm rounded-md ${
                activeTemplate === template.id ? "bg-blue-700" : "bg-gray-800"
              } text-white`}
            >
              {template.name}
            </button>
          ))}
        </div>

        <div className="flex gap-4 items-center">
            <Undo className="w-5 h-5 text-white" onClick={handleUndo} />
            <Redo className="w-5 h-5 text-white" onClick={handleRedo} />
            <button
              onClick={exportHtml}
              className="px-3 py-2 bg-blue-700 rounded-md"
            >
              Export
            </button>
            
          </div>
      </div>

      <div className="flex-grow grid grid-cols-12">
        <div id="blocks" className="col-span-1 bg-gray-950 p-2 text-sm">
          {/* Optionally keep the blocks section */}
        </div>

        <div className="col-span-10 bg-white" id="gjs"></div> {/* Ensure the background is white */}
      </div>
    </div>
  );
};

export default Editor;
