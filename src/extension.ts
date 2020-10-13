import * as vscode from 'vscode';
import { TextEditor } from 'vscode';


export function activate(context: vscode.ExtensionContext) {
  let oj = vscode.window.createOutputChannel("Orange")
  vscode.window.onDidChangeTextEditorSelection(
    (changeEvent: any) => {
      let activeEditor = vscode.window.activeTextEditor!;
      const currentLine = activeEditor?.document.lineAt(activeEditor.selection.active.line);

      console.log("wat?")
      oj.appendLine("??A??A")

      vscode.commands.executeCommand('setContext', 'orgutils:currentLineIsOrgEntry', currentLine.text.startsWith("*"));
      // let editor = changeEvent.textEditor;

      console.log("wat tho??")
      oj.appendLine("BBB")

    },
    null, context.subscriptions);
};

function deactivate() {}

module.exports = {
    activate,
    deactivate
}

