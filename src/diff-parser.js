      var newLinePrefixes = !currentFile.isCombined ? ['+'] : ['+', ' +'];
      var delLinePrefixes = !currentFile.isCombined ? ['-'] : ['-', ' -'];

      if (utils.startsWith(line, newLinePrefixes)) {
      } else if (utils.startsWith(line, delLinePrefixes)) {
      } else if (currentFile && !currentFile.oldName && (values = /^--- [aiwco]\/(.+)$/.exec(line))) {
      } else if (currentFile && !currentFile.newName && (values = /^\+\+\+ [biwco]?\/(.+)$/.exec(line))) {