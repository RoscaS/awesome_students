---
title: Ranger CheatSheet
date: 2018-09-22
sidebar: auto
categories: [Linux]
tags: [Linux, CheatSheet]
authors: [Sol]
---

# {{ $page.title }}
<BlogPostMeta/>

Ranger est un navigateur de fichiers dans le le shell.
* [repo](https://ranger.github.io/)
* [source](https://ranger.github.io/ranger.1.html)

## Shortcuts cheatSheet

* `zh` View hidden files
* `yy` Copy (yank) the selection, like pressing Ctrl+C in modern GUI programs. (You can also type "ya" to add files to the copy buffer, "yr" to remove files again, or "yt" for toggling.)
* `dd` Cut the selection, like pressing Ctrl+X in modern GUI programs. (There are also "da", "dr" and "dt" shortcuts equivalent to "ya", "yr" and "yt".)
* `pp` Paste the files which were previously copied or cut, like pressing Ctrl+V in modern GUI programs.
* `po` Paste the copied/cut files, overwriting existing files.

* `h, j, k, l`: Move left, down, up or right
* `^D or J, ^U or K`: Move a half page down, up
* `H, L`: Move back and forward in the history
* `gg`: Move to the top
* `G`: Move to the bottom
* `[, ]`: Move up and down in the parent directory.
* `^R`: Reload everything
* `F`: Toggle freeze_files setting. When active (indicated by a cyan FROZEN message in the status bar), directories and files will not be loaded, improving performance when all the files you need are already loaded. This does not affect file previews, which can be toggled with zI. Also try disabling the preview of directories with zP.
* `^L`: Redraw the screen
* `i`: Inspect the current file in a bigger window.
* `E`: Edit the current file in $VISUAL otherwise $EDITOR otherwise "vim"
* `S`: Open a shell in the current directory
* `?`: Opens this man page
* `W`: Opens the log window where you can review messages that pop up at the bottom.
* `w`: Opens the task window where you can view and modify background processes that currently run in ranger. In there, you can type "dd" to abort a process and "J" or "K" to change the priority of a process. Only one process is run at a time.
* `^C` Stop the currently running background process that ranger has started, like copying files, loading directories or file previews.
* `<octal>=, +<who><what>, -<who><what>` Change the permissions of the selection. For example, 777= is equivalent to chmod 777 %s, +ar does chmod a+r %s, -ow does chmod o-w %s etc.

* `pP, pO` Like pp and po, but queues the operation so that it will be executed after any other operations. Reminder: type w to open the task window.
* `pl, pL` Create symlinks (absolute or relative) to the copied files
* `phl` Create hardlinks to the copied files
* `pht` Duplicate the subdirectory tree of the copied directory, then create hardlinks for each contained file into the new directory tree.
* `mX` Create a bookmark with the name X

* ` `X`: Move to the bookmark with the name X
* `n`: Find the next file. By default, this gets you to the newest file in the directory, but if you search something using the keys /, cm, ct, ..., it will get you to the next found entry.
* `N`: Find the previous file.
* `oX`: Change the sort method (like in mutt)
* `zX`: Change settings. See the settings section for a list of settings and their hotkey.
* `u?`: Universal undo-key. Depending on the key that you press after "u", it either restores closed tabs (uq), removes tags (ut), clears the copy/cut buffer (ud), starts the reversed visual mode (uV) or clears the selection (uv).
* `f`: Quickly navigate by entering a part of the filename.
* `Space`: Mark a file.
* `v`: Toggle the mark-status of all files
* `V`: Starts the visual mode, which selects all files between the starting point and the cursor until you press ESC. To unselect files in the same way, use "uV".
* `/`: Search for files in the current directory.
* `:`: Open the console.
* `!`: Open the console with the content "shell " so you can quickly run commands
* `@`: Open the console with the content "shell %s", placing the cursor before the " %s" so you can quickly run commands with the current selection as the argument.
* `r`: Open the console with the content "open with " so you can decide which program to use to open the current file selection.
* `cd`: Open the console with the content "cd "
* `^P`: Open the console with the most recent command.
* `Alt-N`: Open a tab. N has to be a number from 0 to 9. If the tab doesn't exist yet, it will be created.
* `gn, ^N`: Create a new tab.
* `gt, gT`: Go to the next or previous tab. You can also use TAB and SHIFT+TAB instead.
* `gc, ^W`: Close the current tab. The last tab cannot be closed this way.
* `M`: A key chain that allows you to quickly change the line mode of all the files of the current directory. For a more permanent solution, use the command "default_linemode" in your rc.conf.
* `.n`: Apply a new filename filter.
* `.m`: Apply a new mimetype filter.
* `.d`: Apply the typefilter "directory".
* `.f`: Apply the typefilter "file".
* `.l`: Apply the typefilter "symlink".
* `.|`: Combine the two topmost filters from the filter stack in the "OR" relationship, instead of the "AND" used implicitly.
* `.&`: Explicitly combine the two topmost filters in the "AND" relationship. Usually not needed though might be useful in more complicated scenarios.
* `.!`: Negate the topmost filter.
* `.r`: Rotate the filter stack by N elements. Just confirm with enter to rotate by 1, i.e. move the topmost element to the bottom of the stack.
* `.c`: Clear the filter stack.
* `.*`: Decompose the topmost filter combinator (e.g. .!, .|).
* `.p`: Pop the topmost filter from the filter stack.
* `..`: Show the current filter stack state.
