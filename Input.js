/**
 * Class for uploading source file.
 * 
 * @author Haru Atari <HaruAtari@gmail.com>
 */
var Input = function()
{
    var _this = this;
    
    /**
     * @var string Id of input field.
     */
    var inputFieldId = "source-image-file";
    /**
     * @var string Uploaded file in base46 hash.
     */
    var fileData = null;
	
    /**
     * @var array List of allow mime types.
     */
    var allowMimeTypes = [
        "image/jpg",
        "image/jpeg",
        "image/png"
    ];

    /**
     * Constructor.
     * @return void
     */
    var _constructor = function()
    {

    };

    /**
     * Load file from input field.
     *
     * @see loadFile()
     *
     * @param object event Change-event of file field.
     * @return void
     */
    this.loadFromField = function(event)
    {
        loadFile(event.target.files[0]);
    };


    /**
     * @return DOM-object Input field.
     */
    this.getField = function() {
        return document.getElementById(inputFieldId);
    };


    /**
     * @return string {@link FileData}
     */
    this.getFileData = function() {
        return fileData;
    }

    /**
     * @return array {@link allowMimeTypes}
     */
    this.getAllowMimeTypes = function() {
        return allowMimeTypes;
    };

    /**
     * Save uploaded file as base64 hash into {@link FileData}.
     * Load this file into preview image.
     * *
     * @see loadFromField()
     * @see loadFromArea()
     * 
     * @param object file Upload file.
     * @retrn void
     */
    var loadFile = function(file)
    {
        if(checkMimeType(file) === false) {
            alert("File has deny mime type.");
            throw "File has deny mime type.";
        }

        var reader = new FileReader();
        reader.onload = function(data) {
            fileData = data.target.result;
            previews.setSourceUrl(fileData);
        }
        reader.readAsDataURL(file);
    };

    /**
     * Check if file has allow mime type.
     * @paran object file File to be checked
     * @return bool
     */
    var checkMimeType = function(file) {
        return _this.getAllowMimeTypes().indexOf(file.type) > -1;
    };

    _constructor.apply(this, arguments);
};
