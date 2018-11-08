<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Files and folders Explorer </title>
    <link rel="stylesheet" href="js/lib/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="js/lib/bootstrap/css/bootstrap-select.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/select/1.2.7/css/select.bootstrap.min.css">
    <link rel="stylesheet" href="js/lib/treejs/themes/default/style.min.css" />
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/pikaday.css">
    <link rel="stylesheet" href="css/dropzone.css">
    <link rel="stylesheet" href="css/style.css">
    

    
</head>
<body>
<!-- Static navbar -->


<div class="fakeWindow">
    <div class="windowTitle"> Générateur de configuration pour la PCI Explorateur de fichiers</div>
</div>



<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li class="active">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Fichier
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a href="#" class="importer">Nouveau projet</a>
                    </li>
                    <li>
                        <a href="#" class="importer">Charger un projet</a>
                    </li>
                    <li>
                        <a href="#" class="importer">Sauvegarder votre projet</a>
                    </li>
                    <!-- <li class="jsonExporterLink"></li>  -->
                    <li>
                        <a href="#" class="exporter">Exporter vers JSON ->PCI</a>
                    </li>
                </ul>
                </li>
                <li>
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Aide
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">

                        <li>
                            <a href="#">Détails</a>
                        </li>
                        
                    </ul>
                </li>
                <li>
<a href="#" class="dropdown-toggle" onclick="openLib()" role="button" aria-haspopup="true" aria-expanded="false">Ouvrir / fermer la Collection
    d'images
                    
                    </a>
                    
                </li>
               
            </ul>
           
        </div>
        <!--/.nav-collapse -->
    </div>
    <!--/.container-fluid -->
</nav>

<!-- Main component for a primary marketing message or call to action -->
<div class="topAdjust">
    
    <div class="  piclib">
        <?php 
        $dirname = "imgfile/";
        $images = glob($dirname."*.png");
        foreach($images as $image) {
        $imgName = basename($image);
        $withoutExt = preg_replace('/\\.[^.\\s]{3,4}$/', '', $imgName);
       
        echo '<a href="#">
           <div class="imgcollitem '. $withoutExt .'">
               <div class="crossDell"></div>
            <img src="'. $image .'" alt="path" width="100px" onclick="getImgPath(this)">
            <figcaption>'. basename($image) .'<img id="'. basename($image) .'"  class="redCross" onclick="deleteImg($(this))" title="Supprimer image?" src="img/closeRed.png"></figcaption>
            </div>
        </a>';
        }
        ?>       
    </div>
        
        <div class="row"> <!-- Le système de colone s'appuie sur 12 -->
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 treeZone mh-100 lightgrey">
                <div class="tree">
                   <!--  <img src="img/computer2.png">
                    Cet Ordinateur -->
                    <div class="jstree">
                    </div>     
                </div>                
            </div>
            <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 fileZone lightgrey">
            <div class="sizer"></div>
            <div class="editInfoZone">
                <div class="editZone">
                    <h3>Edition des données</h3>
                    <div class=" formRoot">
                        <h4>Elément actif - Identifiant : <span class="codeId">CODE</span> - Type : <span class="nodeType"></span></h4>
                            
                            <form action="#" id="root-Editor">
                                <div class="formCol1 colo">  
                                    <div class="form-group editForm ordi volume folder file">
                                        <label for="nodeTitle" class="control-label nodeTitle" ></label>
                                        <input id="nodeTitle" class="form-control short"  title="Modifier le nom du noeud - attention éviter une homonymie dans le même répertoire">
                                        
                                    </div>  
                                   
                                    <!-- <div class="form-group editForm ordi volume folder file">
                                        <div class="input-group-prepend">
                                            <label class="input-type" for="inputType">Type de noeud : </label>
                                        </div>
                                        <select class="custom-select form-control short" id="inputType">
                                                <option selected>Choisir...</option>
                                                <option value="root">Racine</option> 
                                                <option value="volume">Volume</option>
                                                <option value="default">Répertoire</option>
                                                <option value="file">Fichier</option>
                                                <option value="usb">clé USB</option>
                                                <option value="cdRom">CD-Rom</option>
                                                <option value="sdCard">Mémoire Flash SD Card</option>
                                                <option value="network">Réseau</option>
                                                <option value="dvdRom">DVD-Rom</option>
                                                <option value="scan">Scanner</option>
                                                <option value="printer">Imprimante</option>
                                        </select>
                                    </div> -->
                                    
                                    <div class="form-group editForm ordi">
                                        <label for="RAM" class="control-label">RAM : </label>
                                        <input id="RAM" class="form-control short" aria-describedby="RAMHelp" title="Précisez la quantité de mémoire RAM pour votre configuration.">
                                        
                                    </div>
                                    <div class="form-group editForm ordi">
                                        <label for="system" class="control-label">Système : </label>
                                    <input id="system" class="form-control short" aria-describedby="systemHelp" title="Précisez le système d'exploitation de votre configuration.">
                                    
                                    </div>
                                    <div class="form-group editForm ordi">
                                        <label for="ordiName" class="control-label">Nom de l'ordinateur : </label>
                                        <input id="ordiName" class="form-control short" aria-describedby="ordiNameHelp" title="Précisez le nom de votre configuration.">
                                    </div>
                                    <div class="form-group editForm ordi">
                                        <label for="dateCreatOrdi" class="control-label">Date de mise en service : </label>
                                        <input id="dateCreatOrdi" class="form-control short"  title="Précisez la date de création de votre configuration.">
                                    </div>
                                    <div class="form-group editForm ordi">
                                        <label for="dateModOrdi" class="control-label">Date de la dernière mise à jour système : </label>
                                        <input id="dateModOrdi" class="form-control short"   title="Précisez la date de la dernière mise à jour système.">
                                    </div>
                                    <div class="form-group editForm volume folder file">
                                    <label for="dateCreat" class="control-label">Date de création: </label>
                                        <input id="dateCreat" class="form-control short"  title="Précisez la date de création de votre configuration.">
                                    </div>
                                    <div class="form-group editForm volume  file">
                                        <label for="dateMod" class="control-label">Date de modification : </label>
                                        <input id="dateMod" class="form-control short" title="Précisez la date de la dernière mise à jour système.">
                                    </div>
                                    <div class="form-group editForm file">
                                        <label for="author" class="control-label">Auteur: </label>
                                        <input id="author" class="form-control short" title="Précisez l'auteur de cet élément'.">
                                    </div>
                                    <div class="form-group editForm volume">
                                        <label for="capacity" class="control-label">Capacité : </label>
                                        <input id="capacity" class="form-control short"  title="Précisez la capacité du volume en kiloOctets.">
                                    </div>
                                    
                                    
                                    <div class="form-group editForm file">
                                        <label for="app" class="control-label">Application liée : </label>
                                        <input id="app" class="form-control short" title="Précisez l'application permettant d'accéder à ce fichier.">
                                    </div>

                                    <div class="form-group editForm file fileContent">
                                        <label for="fileContent" class="control-label">Contenu du fichier texte : </label>
                                        <textarea id="fileContent" class="form-control short" title="Précisez le contenu de ce fichier." cols="30" rows="4" name="fileContent"> </textarea>
                                    </div>
<!--                                 <div class="form-group editForm folder network">
                                    <label for="visiFolder" class="control-label" title="Précisez si le répertoire sera visible ou non.">Visibilité du répertoire : </label><br/>
                                    <label class="vraiFaux"><input id="hiddenFalse" type="radio" name="hidden" value="false">Répertoire visible </label>
                                    <label class="vraiFaux"><input id="hiddentrue" type="radio" name="hidden" value="true">Répertoire caché </label>
                                    </div> -->
                                
                                </div> 
                                <div class="formCol2 colo">
                                    <div class="form-group editForm file">
                                        <label for="extension" class="control-label">Extension : </label><br />
                                        <select class="selectpicker superShort" id="extension">
                                            <option disabled>Choisir...</option>
                                            <option value="txt">txt</option>
                                            <option value="png">png</option>
                                            <option value="jpg">jpg</option>
                                            <option value="xls">xls</option>
                                            <option value="doc">doc</option>
                                            <option value="docx">docx</option>
                                            <option value="inf">inf</option>
                                            <option value="cfg">cfg</option>
                                            <option value="js">js</option>
                                            <option value="com">com</option>
                                        </select>
                                    </div>
                                    <div class="form-group editForm file">
                                        <label for="dateLastAccess" class="control-label">Date du dernier accès : </label>
                                        <input id="dateLastAccess" class="form-control short" title="Précisez la date du dernier accès au fichier.">
                                    </div>

                                    <div class="form-group editForm file">
                                        <label for="size" class="control-label">Taille : (en kiloOctets) </label>
                                        <input id="size" class="form-control short" title="Précisez la taille du fichier en kiloOctets.">
                                    </div>

                                    <div class="form-group editForm file urlImgGroup">
                                        Pour ajouter une image d'illustration, indiquer une url ou bien uploader une image dans la bibliothèque..<br/>
                                        <label for="urlImg" class="control-label">URL de l'image d'illustration du fichier : </label>
                                        <input id="urlImg" class="form-control short" title="Précisez l'URL de l'image qui illustrera ce fichier.">
                                    </div>

                                    <div class="form-group editForm file urlImgGroup">
                                        <input type="button" id="imgLib" onclick ="openLib()" value="Choisir une image déjà uploadée">
                                    </div>

                            </form>

                            <form  method="post" action="" enctype="multipart/form-data" id="myform" class="editForm file urlImgGroup">
                                    <div class="form-group editForm file urlImgGroup">
                                        <label for="imgInput" class="control-label">Uploader une image sur le serveur :  </label>   
                                       <input id="imgInput" type="file" multiple="multiple" class="form-control-file  file" accept="image/*" >
                                        <br>
                                        <input type="button" class="button" value="Upload du fichier vers le serveur" id="but_upload">
                                       <!--  <img width="250px" id="previewer" src="#" alt="Preview"/> -->
                                        </div>                                        
                                    </div>
                                
                                </div> 

                                    <button class="envoi modifRecordBT">Enregistrer les modifications</button>
                            </form>
                           <div class="container"></div>

                    </div>

                </div>  
                <div class="infoZone">
                        <div class="project">
                            <form action="dirCreator.php" method="POST" target="formDestination">
                                <div class="formCol1 coloRight"> 
                                    <div class=" form-group Gprojet">
                                    <label class="control-label">Nom du projet : </label><input name="name" class="NomProjet form-control short" type="text" placeholder="Identifier votre projet">
                                        <label class="control-label">Auteur(s) : </label>
                                        <input name="author" class="auteur form-control short" type="text">
                                        <label class="control-label">Langue de travail :</label> 
                                        <input name="language" class="Langue form-control short" type="text">
                                    </div>
                                    
                                </div>
                                <div class="formCol2Right coloRight">
                                    <div class="form-group Gprojet">
                                        <label class="control-label">Date de création :</label>
                                        <input name="dataCreat" class="ProjetCreation form-control short" type="text">
                                        <label class="control-label">Email de contact :</label> 
                                        <input name="mail" class="EMcontact form-control short" type="text">
                                        <label class="control-label">Version :</label> 
                                        <input name="version" class="version form-control short" type="text">
                                    </div>
                                </div>
                                
                        <iframe id="formResult" name="formDestination"></iframe>
                                <button>Sauvegarder ces informations</button>
                            </form>
                        </div>
                    <h3>Générateur de répertoires</h3>
                    Pour ajouter une liste de répertoire à un noeud de l'arborescence, coller votre liste ci-dessous :
                        <div class="form-group ">
                            <label for="comment">Votre liste de repetoires viendra s'ajouter à : <span class="dirActive"></span></label>
                            <textarea class="form-control" rows="5" id="addRepList"></textarea>
                            <button class="envoi massivFolders">Ajouter les répertoires</button>
                        </div>



                    <h3>Générateur de fichiers</h3>

                    <p>Pour ajouter une liste de fichiers à un répertoire, respecter 2 points :<br/>
                            - Les fichiers doivent être écrits avec leur extension -> exemple : note.txt (nomDuFichier.extension).<br/> 
                            - Les noms de fichiers doivent être séparés par des virgules.
                        </p>                      
                        <div class="form-group ">   
                            <label for="comment">Votre liste de fichiers viendra s'ajouter à : <span class="dirActive"></span></label>
                            <textarea placeholder="ceci.txt, cela.cfg, truc.dat" class="form-control" rows="4" id="addFileList"></textarea>
                            <button class="envoi massivFiles">Ajouter les fichiers</button>
                        </div>
                        
                </div>  
            </div>    
            </div>
        </div>
</div>
    
    
    
    </div>

</div>

<div class="signature">Ministère de l'éducation nationale - DEPP - Wiquid 2018</div>



    <script src="js/lib/jquery.min.js"></script>
    <script src="js/lib/lodash.js"></script>
    <script src="js/lib/moment.js"></script>
    <script src="js/lib/pikaday.js"></script>
    <script src="js/lib/pikaday.jquery.js"></script>
    <script src="js/lib/bootstrap/js/bootstrap.min.js"></script>
    <script src="js/lib/BootstrapMenu.min.js"></script>
    <script src="js/lib/bootstrap-select.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min.js"></script>
    <script src="js/lib/treejs/jstree.min.js"></script>
    <script src="js/lib/dropzone.js"></script>
    <script src="js/app.js"></script>
     
</body>
</html>