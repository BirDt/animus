function changeTheme(name) {
    themeData.theme = name;
    themeData.save();
    $("#theme-stylesheet").href = "css/themes/" + name + ".css"
}

changeTheme(themeData.theme);