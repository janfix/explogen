<?php
define("PATH", "/projects");
$name = $_POST["name"];

if (isset($name)) {
  //get value of inputfield
  $dir = $_POST['name'];
  //set the target path ??

$targetfilename = PATH . '/' . $dir;
$hash = uniqid();

if (!is_file($dir) && !is_dir($dir)) {
    mkdir('projects/'.$dir.$hash.'/', 0777, true);
    $fichier = fopen(__DIR__ .'/projects/'.$dir.$hash.'/'.$_POST['name'].".txt","w");
    echo $fichier;
    // Vérification de l'écriture
    if (fwrite($fichier,$_POST['name'])){
    echo "Le fichier à été créé avec succès";
    } else {
    // Erreur
    echo "Impossible de créer le fichier";
    }
    fclose($fichier);
    }


}
else
{
    echo "{$dir} exists and is a valid dir";
}

?>
