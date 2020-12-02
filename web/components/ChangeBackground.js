// components/ChangeBackground.js

import React, { useEffect } from "react";

export default function ChangeBackground(color) {
    document.documentElement.style.setProperty("--background-color", color);
}
