Adds various missing functionality in org mode

Additional contexts added:

* `orgutils:currentLineIsOrgEntry` : True if the current line is an entry


# orgutils:currentLineIsOrgEntry

`keybindings.json`:

``` json
  {
    "key": "tab",
    "command": "org.demoteSubtree",
    "when": "editorLangId == 'org' && orgutils:currentLineIsOrgEntry"
  },
  {
    "key": "shift+tab",
    "command": "org.promoteSubtree",
    "when": "editorLangId == 'org' && orgutils:currentLineIsOrgEntry"
  }
```
