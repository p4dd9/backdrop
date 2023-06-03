# FilterFiesta

A clientside twitch extension
Repo: https://github.com/p4dd9/backdrop

# How to use

Click on the BACKDROP badge on the left to open the settings menu. Play around with the filters.

# Changelog

-   Implement toggleable extension UI via mouse click on "BACKDROP" button
-   Integrate browser compatible supported CSS BackdropFilters: blur, brightness, contract, grayscale, hue-rotate, invert, sepia and saturate
-   Min form values are set to 0
-   The default css property values are the default values in the settings

# Development plans

-   Add presets (possibly submitted by the twitch community, e.g. LoFi, Horror, ...)
-   Store presets in localStorage
-   Set a max cap for form values (css prop specific)
-   Observe feedback to decide to hide button badge on the left if mouse is not hovering the screen
-   Observe feedback and rename extension back to "Backdrop" (https://discuss.dev.twitch.tv/t/extension-naming-issues/24264)

# References

https://css-tricks.com/almanac/properties/f/filter/  
https://css-tricks.com/using-svg-to-create-a-duotone-image-effect/  
https://alistapart.com/article/finessing-fecolormatrix/  
http://una.github.io/CSSgram/
