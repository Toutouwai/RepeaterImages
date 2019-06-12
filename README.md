# Repeater Images

A module for ProcessWire CMS/CMF. Adds options to modify Repeater fields to make them convenient for "page-per-image" usage. Using a page-per-image approach allows for additional fields to be associated with each image, to record things such as photographer, date, license, links, etc.

When Repeater Images is enabled for a Repeater field the module changes the appearance of the Repeater inputfield to be similar (but not identical) to an Images field. The collapsed view shows a thumbnail for each Repeater item, and items can be expanded for field editing.

## Screencast

![Repeater Images screencast](https://user-images.githubusercontent.com/1538852/59389850-98034100-8dc3-11e9-8810-1296a4baf318.gif)

## Installation

[Install](http://modules.processwire.com/install-uninstall/) the Repeater Images module.

## Setup

* Create an image field to use in the Repeater field. Recommended settings for the image field are "Maximum files allowed" set to 1 and "Formatted value" set to "Single item (null if empty)".
* Create a Repeater field. Add the image field to the Repeater. If you want additional fields in the Repeater create and add these also.

## Repeater Images configuration

* Tick the "Activate Repeater Images for this Repeater field" checkbox.
* In the "Image field within Repeater" dropdown select the single image field. You must save the Repeater field settings to see any newly added Image fields in the dropdown.
* Adjust the image thumbnail height if you want (unlike the core Images field there is no slider to change thumbnail height within Page Edit). 

### Image uploads feature

There is a checkbox to activate image uploads. This feature allows users to quickly and easily add images to the Repeater Images field by uploading them to an adjacent "upload" field.

To use this feature you must add the image field selected in the Repeater Images config to the template of the page containing the Repeater Images field - immediately above or below the Repeater Images field would be a good position.

It's recommended to set the label for this field in template context to "Upload images" or similar, and set the visibility of the field to "Closed" so that it takes up less room when it's not being used. Note that when you drag images to a closed Images field and it will [automatically open](https://processwire.com/blog/posts/processwire-3.0.119-and-new-site-updates/#auto-opening-file-image-fields). You don't need to worry about the "Maximum files allowed" setting because the Repeater Images module overrides this for the upload field.

New Repeater items will be created from the images uploaded to the upload field when the page is saved. The user can add descriptions and tags to the images while they are still in the upload field and these will be retained in the Repeater items. Images are automatically deleted from the upload field when the page is saved.

## Tips

* The "Use accordion mode?" option in the Repeater field settings is useful for keeping the inputfield compact, with only one image item open for editing at a time.
* The "Repeater item labels" setting determines what is shown in the thumbnail overlay on hover. Example for an image field named "image":
```
{image.basename} ({image.width}x{image.height})
```
