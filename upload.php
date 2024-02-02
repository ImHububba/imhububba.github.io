<?php
$uploadDirectory = 'uploads/';

if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {
    $tempFilePath = $_FILES['file']['tmp_name'];
    $originalFilename = $_FILES['file']['name'];
    $fileExtension = pathinfo($originalFilename, PATHINFO_EXTENSION);

    $newFilename = uniqid() . '.' . $fileExtension;
    $targetFilePath = $uploadDirectory . $newFilename;

    move_uploaded_file($tempFilePath, $targetFilePath);

    // Generate a simple HTML page with the image
    $htmlContent = "<html><body><img src='$targetFilePath' alt='Uploaded Image'></body></html>";

    // Save the HTML content to a file
    $htmlFilePath = 'custom_page.html';
    file_put_contents($htmlFilePath, $htmlContent);

    // Respond with the HTML page URL
    echo $htmlFilePath;
} else {
    echo 'Error uploading file.';
}
?>
