import { Component, OnInit } from '@angular/core';
import * as monaco from 'monaco-editor';
@Component({
  selector: 'app-snippet-editor',
  templateUrl: './snippet-editor.component.html',
  styleUrls: ['./snippet-editor.component.css'],
})
export class SnippetEditorComponent implements OnInit {
  defaultCode: string = `<html>
    <head>
      <title>HTML Sample</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <style type="text/css">
        h1 {
          color: #CCA3A3;
        }
      </style>
      <script type="text/javascript">
        alert("I am a sample... visit devChallengs.io for more projects");
      </script>
    </head>
    <body>
      <h1>Heading No.1</h1>
      <input disabled type="button" value="Click me" />
    </body>
</html>
  `;

  editorOptions = {
    theme: 'vs-dark',
    language: 'html',
    automaticLayout: true,
    folding: true, // Enable folding
    foldingStrategy: 'indentation', // Use 'auto' for more intelligent folding (or 'indentation' for basic indentation-based folding)
    showFoldingControls: 'always', // Always show folding controls
  };

  ngOnInit() {}

  onEditorInit(editor: any) {
    // You can also set an initial value for the editor here if needed
    editor.setValue(this.defaultCode);
  }
}
