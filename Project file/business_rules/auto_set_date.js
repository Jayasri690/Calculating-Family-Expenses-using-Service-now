(function executeRule(current, gsn) {
    if (!current.date)
        current.date = new GlideDate();
})(current, gsn);