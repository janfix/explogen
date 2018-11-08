var  treeFolder, actifNode;
//Specify only parent - 
treeFolder = [{
        "id": "root",
        "parent": "#",
        "text": "Cet Ordinateur",
        "type": "root",
        'li_attr': {},
        'a_attr': {},
        "data": {
            "type": "Disque Système",
            "RAM": "8,00 Go",
            "système": "Linux 64 bits",
            "nom": "poste1",
            "dateMod": "2018-01-02",
            'dateCreat': '2001-08-22'
        }
    },

    {
        "id": "clipboard",
        "state" : {"hidden" : true},
        "parent": "#",
        "text": "ClipBoard",
        'li_attr': {},
        'a_attr': {},
        "type": "clipboard",
        "data": {
            "type": "Volume",
            "dateMod": "-",
            'dateCreat': '2001-08-22',
            'capacity': '1'
        }
    },
{
        "id": "searchResult",
        "state" : {"hidden" : true},
        "parent": "#",
        "text": "searchResult",
        'li_attr': {},
        'a_attr': {},
        "type": "searchResult",
        "data": {
            "type": "Volume",
            "dateMod": "-",
            'dateCreat': '-',
            'capacity': '1'
        }
    },
    
    {
        "id": "erased",
        "state": {
            "hidden": true
        },
        "parent": "#",
        "text": "erased",
        'li_attr': {},
        'a_attr': {},
        "type": "erased",
        "data": {
            "type": "erased",
            "dateMod": "-",
            'dateCreat': '-'
        }
    },
    {
        "id": "vol1",
        "parent": "root",
        "text": "C:",
        'li_attr': {},
        'a_attr': {},
        "type": "volume",
        "data": {
            "type": "Volume",
            "dateMod": "-",
            'dateCreat': '2001-08-22',
            'capacity' : '8000000000', 

        }
    },
    {
        "id": "dir1",
        "parent": "vol1",
        "text": "System",
        "state": {
             "hidden": false
         },
        'li_attr': {},
        'a_attr': {},
        "type": "default",
        "data": {
            "type": "Répertoire",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-08-22'
        }
    },
    {
        "id": "documents",
        "parent": "vol1",
        "text": "Documents",
        'li_attr': {},
        'a_attr': {},
        "type": "default",
        "data": {
            "type": "Répertoire",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-08-22'
        }
    },
    {
        "id": "file1",
        "parent": "documents",
        "text": "note.txt",
        'li_attr': {},
        'a_attr': {},
        "type": "file",
        "data": {
            "type": "fichier",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-08-22',
            'dateLastAccess': '2000-01-10',
            'size' : 10000,
            'application' : 'Text Editor',
            'image_url' : 'img/toto.png',
            'content' : "ceci est un contenu de texte.",
            'author' : "Pierre Martin"
        }
    },
    {
        "id": "file2",
        "parent": "documents",
        "text": "config.log",
        'li_attr': {},
        'a_attr': {},
        "type": "file",
        "data": {
            "type": "fichier",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-08-22',
            'dateLastAccess': '2000-01-10',
            'size': 10000,
            'application': 'Text Editor',
            'image_url': 'img/toto.png',
            'content': "ceci est un contenu de texte.",
            'author': "Pierre Martin"
        }
    },
    {
        "id": "dir3",
        "parent": "vol1",
        "text": "Users",
        'li_attr': {},
        'a_attr': {},
        "type": "default",
        "data": {
            "type": "Répertoire",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-07-22'
        }
    },
    {
        "id": "dir4",
        "parent": "vol1",
        "text": "Project",
        'li_attr': {},
        'a_attr': {},
        "type": "default",
        "data": {
            "type": "Répertoire",
            "dateMod": "2012-12-1",
            'dateCreat': '2001-08-22'
        }
    },
    {
        "id": "dir5",
        "parent": "vol1",
        "text": "Programmes",
        'li_attr': {},
        'a_attr': {},
        "type": "default",
        "data": {
            "type": "Répertoire",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-08-22'
        }
    },
    {
        "id": "vol2",
        "parent": "root",
        "text": "D:",
        'state': {
            'opened': false
        },
        "type": "volume",
        "data": {
            "type": "Volume",
            "dateMod": "-",
            'dateCreat': '2001-08-22',
            'capacity': '800000000'
        }
    },
    {
        "id": "downloads",
        "parent": "vol2",
        "text": "Téléchargement",
        "data": {
            "type": "Répertoire",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-08-01'
        }
    },
    {
        "id": "videos",
        "parent": "vol2",
        "text": "Vidéos",
        "data": {
            "type": "Répertoire",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-08-22'
        }
    },
    {
        "id": "images",
        "parent": "vol2",
        "text": "Images",
        "data": {
            "type": "Répertoire",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-08-22'
        }
    },
    {
        "id": "cdRom",
        "parent": "root",
        "text": "Disque Optique",
        "type": "cdRom",
        "data": {
            "type": "Lecteur Optique CD",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-08-22',
            'capacity': '1000000'
        }
    },
    {
        "id": "sdCard",
        "parent": "root",
        "text": "Mémoire flash",
        "type": "sdCard",
        "data": {
            "type": "Mémoire Flash",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-08-22',
            'capacity': '1000000'
        }
    },
    {
        "id": "usb",
        "parent": "root",
        "text": "Lecteur USB",
        "type": "usb",
        "data": {
            "type": "Mémoire Flash usb",
            "dateMod": "2012-12-4",
            'dateCreat': '2011-01-22',
            'capacity': '16000000'
        }
    },
    {
        "id": "netWork",
        "parent": "#",
        "text": "Réseau Local",
        "type": "netWork",
        "data": {
            "type": "Réseau",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-08-22'
        }
    },
    {
        "id": "bin",
        "parent": "#",
        "text": "Corbeille",
        "type": "bin",
        "data": {
            "type": "Poubelle",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-08-22'
        }
    }, {
        "id": "prtest",
        "parent": "downloads",
        "text": "prtest",
        "data": {
            "type": "Répertoire",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-08-22'
        }
    },
    {
        "id": "pratique",
        "parent": "prtest",
        "text": "pratique",
        "data": {
            "type": "Répertoire",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-08-22'
        }
    },{
        "id": "parsel",
        "parent": "prtest",
        "text": "parsel",
        "data": {
            "type": "Répertoire",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-08-22'
        }
    },{
        "id": "selidon",
        "parent": "pratique",
        "text": "selidon",
        "data": {
            "type": "Répertoire",
            "dateMod": "2012-12-3",
            'dateCreat': '2001-08-22'
        }
    }

];

var $tree = $('.jstree');

$(function () {
    // 6 create an instance when the DOM is ready
    $tree.jstree({
        'core': {
            'data': treeFolder,
            "check_callback": function (operation, node, node_parent, node_position, more) {
                if (operation == 'move_node') {
                    if (node_parent.type == 'cdRom') {
                        //console.log("CDROMM");
                       $('.jstree').jstree(true).deselect_all();
                        return false
                    }
                    else if(node_parent.type == 'root') {
                        //console.log("ROOOOOT");
                        $('.jstree').jstree(true).deselect_all();
                        return false
                    } 
                    else if (node_parent.type == 'netWork') {
                        
                        $('.jstree').jstree(true).deselect_all();
                        return false
                    }
                    else if (node_parent.id == '#') {
                        // console.log("#########################");
                         $('.jstree').jstree(true).deselect_all();
                         return false
                     }
                    else {
                        return true;
                    }
                       
                }
            }
            
        },
        'plugins': ["contextmenu", "types", "dnd", "state", "unique", "wholerow"],
        'contextmenu': {
            'items': customMenu
        },
        'dnd': {
              "is_draggable": function (node) { 
                 if (node[0].type == "default" || node[0].type == "file") {
                     return true; // Controle draggable here --- flip switch here.
                    }
                else{ return false;}
             }
            //check_while_dragging: true
        },
        'types': {
            "bin": {
                "icon": "glyphicon glyphicon-trash"
            },
            "volume": {
                "icon": "./img/hdrive.png"
            },
            "cdRom": {
                "icon": "./img/cdrom.ico"
            },
            "netWork": {
                "icon": "./img/network.ico"
            },
            "sdCard": {
                "icon": "./img/sdcard.ico"
            },
            "usb": {
                "icon": "./img/usb.png"
            },
            "distant": {
                "icon": "./img/distant.ico"
            },
            'root': {
                "icon": "./img/computer2.png"
            },
            'file' : {
                "icon": "./img/FileSymbol.png",
                "max_children" : 0
            },
             'printer': {
                 "icon": "./img/printer.png",
                 "max_children": 0
             },
            'scanner': {
                "icon": "./img/scanner.png",
                "max_children": 0
            },

        }
        
    });

    function customMenu(node) {
       if($('.jstree').jstree("get_selected", true)[0].type == "root"){
            var items = {
                volumeAdd: {
                    label: "Ajouter un volume",
                    action: function (obj) {
                        let selectedNode = $('.jstree').jstree("get_selected", true);
                        commandNewHD(selectedNode);
                    },
                    icon: "/img/logicVol.png"
                },
                cdRomAdd:{
                    label:"Ajouter un lecteur de CD-Rom",
                    action : function(obj){
                        let selectedNode = $('.jstree').jstree("get_selected", true);
                        commandNewCD(selectedNode);
                    },
                    icon: "/img/cdrom.ico"
                },
                dvdRomAdd: {
                    label: "Ajouter un lecteur de DVD-Rom",
                    action: function (obj) {
                        let selectedNode = $('.jstree').jstree("get_selected", true);
                        commandNewDVD(selectedNode);
                    },
                    icon: "/img/dvd.png"
                },
                flashAdd: {
                    label: "Ajouter une SDCard",
                    action: function (obj) {
                        let selectedNode = $('.jstree').jstree("get_selected", true);
                        commandNewSDCard(selectedNode);
                    },
                    icon: "/img/sdcard.ico"
                },
                usbAdd: {
                    label: "Ajouter une clé USB",
                    action: function (obj) {
                        let selectedNode = $('.jstree').jstree("get_selected", true);
                        //commandProperties(selectedNode);
                    },
                    icon: "/img/usb.png"
                },
                printAdd: {
                    label: "Ajouter une imprimante",
                    action: function (obj) {
                        let selectedNode = $('.jstree').jstree("get_selected", true);
                        commandNewPrinter(selectedNode);
                    },
                    icon: "/img/printer.png"
                },
                scanAdd: {
                    label: "Ajouter un scanner",
                    action: function (obj) {
                        let selectedNode = $('.jstree').jstree("get_selected", true);
                        commandNewScanner(selectedNode);
                    },
                    icon: "/img/scanner.png"
                },
            }
            return items;
        }
        else if ($('.jstree').jstree("get_selected", true)[0].type == "bin") {
            console.log("Aucun menu");
            return items;
        }
       else if ($('.jstree').jstree("get_selected", true)[0].type == "file") {
           var items = {
               deleteDir: {
                   label: "Supprimer",
                   action: function (obj) {
                       let selectedNodeId = $('.jstree').jstree("get_selected");
                       commandTrash(selectedNodeId);
                   },
                   icon: "fa fa-trash"
               }
           }
           return items;
       }
       else{
            var items = {
                createDir: {
                    label: "Nouveau répertoire",
                    action: function (obj) {
                        commandNewFolder();
                    },
                    icon: "fa fa-folder"
                },
                createFile: {
                    label: "Nouveau fichier",
                    action: function (obj) {
                        commandNewFile();
                    },
                    icon: "fa fa-file"
                },
                deleteDir: {
                    label: "Supprimer",
                    action: function (obj) {
                        let selectedNodeId = $('.jstree').jstree("get_selected");
                        commandTrash(selectedNodeId);
                    },
                    icon: "fa fa-trash"
                }
            }
            return items;

        }
    }

    // Open folder with on Click instead of doubleClick
    $(".jstree").bind("select_node.jstree", function (e, data) {
        return data.instance.toggle_node(data.node);
    });

        $('.jstree').on("changed.jstree", function (e, data) {
        
        if (data.selected == "cdRom"){console.log("no");}
        $(".jstree-node").attr("ondrop", "drop(event)");
        $(".jstree-node").attr("ondragover","allowDrop(event)");
        console.log(data.selected); 
        displayNodeData(data.selected);
    });

    
    
});



function displayNodeData(activNodeId){
    actifNode  =  $tree.jstree(true).get_node(activNodeId);
    console.log(actifNode);
    $(".codeId").html(activNodeId);
    $(".dirActive").html(actifNode.text);
    let typeClean;
    if(actifNode.type == "default"){
        typeClean = "Répertoire";
        $("#addRepList").prop('disabled', false);
        $("#addFileList").prop('disabled', false);
        $(".massivFolders").prop('disabled', false);
        $(".massivFiles").prop('disabled', false);
    }
    else if (actifNode.type == "file") {
        typeClean = "Fichier";
        $("#addRepList").prop('disabled', true);
        $("#addFileList").prop('disabled', true);
        $(".massivFolders").prop('disabled', true);
        $(".massivFiles").prop('disabled', true);
    } else if (actifNode.type == "volume"){
        typeClean = "Volume";
        $("#addRepList").prop('disabled', false);
        $("#addFileList").prop('disabled', false);
        $(".massivFolders").prop('disabled', false);
        $(".massivFiles").prop('disabled', false);
    } else if (actifNode.type == "root") {
        typeClean = "Ordinateur";
        $("#addRepList").prop('disabled', true);
        $("#addFileList").prop('disabled', true); 
        $(".massivFolders").prop('disabled', true);
        $(".massivFiles").prop('disabled', true);
    } else if (actifNode.type == "cdRom") {
        typeClean = "CDROM / DVDROM";
        $("#addRepList").prop('disabled', false);
        $("#addFileList").prop('disabled', false);
        $(".massivFolders").prop('disabled', false);
        $(".massivFiles").prop('disabled', false);
    } else if (actifNode.type == "sdCard") {
        $("#addRepList").prop('disabled', false);
        $("#addFileList").prop('disabled', false);
        $(".massivFolders").prop('disabled', false);
        $(".massivFiles").prop('disabled', false);
        typeClean = "Mémoire Flash SD-Card";
    }else if (actifNode.type == "usb") {
        $("#addRepList").prop('disabled', false);
        $("#addFileList").prop('disabled', false);
        $(".massivFolders").prop('disabled', false);
        $(".massivFiles").prop('disabled', false);
        typeClean = "clé USB";
    } else if (actifNode.type == "netWork") {
        typeClean = "Réseau local";
        $("#addRepList").prop('disabled', false);
        $("#addFileList").prop('disabled', false);
        $(".massivFolders").prop('disabled', false);
        $(".massivFiles").prop('disabled', false);
    } else if (actifNode.type == "bin") {
        typeClean = "Corbeille";
        $("#addRepList").prop('disabled', true);
        $("#addFileList").prop('disabled', true);
        $(".massivFolders").prop('disabled', true);
        $(".massivFiles").prop('disabled', true);
    }


    $(".nodeType").html(typeClean);
    $(".editForm").hide();
    if (actifNode.type == "root") {
        console.log("Cet Ordi");
        $(".ordi").show();
        $("#nodeTitle").val(actifNode.text);
        $("#RAM").val(actifNode.data.RAM);
        $("#system").val(actifNode.data.système);
        $("#ordiName").val(actifNode.data.nom);
        $("#dateCreatOrdi").val(actifNode.data.dateCreat);
        $("#dateModOrdi").val(actifNode.data.dateMod);

    }

    if (actifNode.type == "volume" || actifNode.type == "cdRom") {
        console.log("volume");
        $(".volume").show();
        $("#nodeTitle").val(actifNode.text);
        $("#dateCreat").val(actifNode.data.dateCreat);
        $("#dateMod").val(actifNode.data.dateMod);
        $("#capacity").val(actifNode.data.capacity)
    }
    if (actifNode.type == "default" ){
        console.log("repertoire");
        $(".folder").show();
        $(".nodeTitle").html('Nom du répertoire :<span class="mention ">Attention les homonymes dans un même répertoire ne sont pas tolérés.</span> ');
        $("#nodeTitle").val(actifNode.text);
        $("#dateCreat").val(actifNode.data.dateCreat);
    }
    if (actifNode.type == "cdRom") {
        console.log("cdRom");
        $(".volume").show();
        $("#nodeTitle").val(actifNode.text);
        $("#dateCreat").val(actifNode.data.dateCreat);
        $("#dateMod").val(actifNode.data.dateMod);
        $("#capacity").val(actifNode.data.capacity);
    }
    if (actifNode.type == "sdCard") {
        console.log("sdCard");
        $(".volume").show();
        $("#nodeTitle").val(actifNode.text);
        $("#dateCreat").val(actifNode.data.dateCreat);
        $("#dateMod").val(actifNode.data.dateMod);
        $("#capacity").val(actifNode.data.capacity);
    }
    if (actifNode.type == "usb") {
        console.log("usb");
         $(".volume").show();
         $("#nodeTitle").val(actifNode.text);
         $("#dateCreat").val(actifNode.data.dateCreat);
         $("#dateMod").val(actifNode.data.dateMod);
         $("#capacity").val(actifNode.data.capacity);
    }
    if (actifNode.type == "netWork") {
        console.log("netWork");
       
    }    
    if (actifNode.type == "bin") {
        console.log("bin");

    }  
    if (actifNode.type == "file") {
        console.log("file");
       
        $(".file").show();
        $(".nodeTitle").html('Nom du fichier :<span class="mention ">Attention les homonymes dans un même répertoire ne sont pas tolérés.</span> ');
        var shortName = actifNode.text.split('.');
        $("#nodeTitle").val(shortName[0]);
        console.log(shortName[1]);
        $("#extension").val(shortName[1]).change();
        $("#dateCreat").val(actifNode.data.dateCreat);
        $("#dateMod").val(actifNode.data.dateMod);
        $("#dateLastAccess").val(actifNode.data.dateLastAccess);
        $("#size").val(actifNode.data.size);
        $("#app").val(actifNode.data.application);
        $("#urlImg").val(actifNode.data.image_url);
        $("#fileContent").val(actifNode.data.content);
        $("#author").val(actifNode.data.author);
        }

    $("#extension").change(function () {
        if ($(this).val() == "txt") {
            $(".fileContent").show();
            $("#app").val("Editeur de Texte : TextEditor");
            $("#urlImg").val("");
            $(".urlImgGroup").hide();
            $(".urlImgGroup").hide();
        } 
        else if ($(this).val() == "xls" || $(this).val() == "xlsx") {
            $(".fileContent").hide();
            $("#app").val("Tableur : Excel");
            $(".urlImgGroup").show();
        }
        else if ($(this).val() == "doc" || $(this).val() == "docx") {
            $(".fileContent").hide();
            $("#app").val("Traitement de texte : Word");
            $(".urlImgGroup").show();
        }
        else if ($(this).val() == "png" || $(this).val() == "jpg") {
            $(".fileContent").hide();
            $("#app").val("Editeur d'image : GIMP");
            $(".urlImgGroup").show();
        }
        else {
            $(".fileContent").hide();
            $(".urlImgGroup").show();
        }
    })

}

   $(".modifRecordBT").on("click", function (event) {
    event.preventDefault();
    if (actifNode.type=="file"){
       let nameArray = actifNode.text.split(".");
       var presence = false;
       console.log(nameArray[0]);
       console.log($("#extension").val());
       var extArr = ["txt","xls","xlsx","doc","docx","jpg","png","inf","cfg","js","com"];
        for (let i = 0; i < extArr.length; i++) {
            if (extArr[i] == nameArray[1] || $("#extension").val() != null ) {
                presence = true;
                if (presence) {
                    actifNode.text = $("#nodeTitle").val() + '.' + $("#extension").val();
                }
                
            }
            
        }
       
        //else { actifNode.data.extension = nameArray[1]}
        console.log(presence);

        actifNode.data.dateLastAccess = $("#dateLastAccess").val();
        actifNode.data.size = $("#size").val();
        actifNode.data.application = $("#app").val();
        actifNode.data.image_url = $("#urlImg").val();
        actifNode.data.content = $("#fileContent").val();
        actifNode.data.dateCreat= $("#dateCreat").val();
        actifNode.data.dateMod= $("#dateMod").val();
        actifNode.data.author = $("#author").val();
        
         
    } else if(actifNode.type=="root") {
        console.log(actifNode.text);
        actifNode.text = $("#nodeTitle").val();
        actifNode.data.RAM = $("#RAM").val();
        actifNode.data.système = $("#system").val();
        actifNode.data.nom = $("#ordiName").val();
        actifNode.data.dateCreat = $("#dateCreat").val();
        actifNode.data.dateMod =  $("#dateMod").val();

    } else{
        console.log(actifNode.type);
        actifNode.text = $("#nodeTitle").val();
        actifNode.data.dateCreat = $("#dateCreat").val();
        actifNode.data.dateMod =  $("#dateMod").val();
        actifNode.data.capacity = $("#capacity").val();
    }

     $tree.jstree(true).redraw(true);

    });


function commandNewFolder(folderName){
    actifNode = $tree.jstree(true).get_selected();
    var newId = $tree.jstree(true).get_node("root");
    console.log(newId.children_d.length);
    var node;
    if(folderName){
        node = {
            id: "dir" + (newId.children_d.length + 1),
            text: folderName, 
            type: "default"
        };
    }
    else{
        node = {
            id: "dir" + (newId.children_d.length + 1),
            text: "Nouveau Répertoire", 
            type: "default"
        };
    }
    var newNode = $tree.jstree('create_node', actifNode, node, 'last');
    console.log($tree.jstree(true).get_node(newNode));
    var datecreat = randomDate(new Date(2016, 0, 1), new Date());
    $tree.jstree(true).get_node(newNode).type = "default";
    $tree.jstree(true).get_node(newNode).data={};
    $tree.jstree(true).get_node(newNode).data.dateCreat = moment(datecreat).format("DD-MM-YYYY");
}

function commandNewFile(fileName) {
    actifNode = $tree.jstree(true).get_selected();
    var newId = $tree.jstree(true).get_node("root");
    console.log(newId.children_d.length);
    var node
    if(fileName){
        node = {
            id: "fileId" + (newId.children_d.length + 1),
            text: fileName,
            type : "file"
        };
    }
    else{
       node = {
            id: "fileId" + (newId.children_d.length + 1),
            text: "Nouveau fichier",
            type : "file"
        }; 
    }
    var newNode = $tree.jstree('create_node', actifNode, node, 'last');
    
    var datecreat = randomDate(new Date(2016, 0, 1), new Date());
    var timestamp = datecreat.getTime();
    console.log(timestamp);
    var dateMod = timestamp + (86400000 * Math.random());
    var dateLast = dateMod + +(166400000 * Math.random());
    
    $tree.jstree(true).get_node(newNode).data = {};
    $tree.jstree(true).get_node(newNode).data.dateCreat = moment(datecreat).format("DD-MM-YYYY");
    $tree.jstree(true).get_node(newNode).data.dateMod = moment(dateMod).format("DD-MM-YYYY");
    $tree.jstree(true).get_node(newNode).data.dateLastAccess = moment(dateLast).format("DD-MM-YYYY");
    $tree.jstree(true).get_node(newNode).data.size = randomSize(1000, 1000000000);
    $tree.jstree(true).get_node(newNode).data.application = "-";
    $tree.jstree(true).get_node(newNode).data.image_url = "";
    $tree.jstree(true).get_node(newNode).data.content = "";

    $tree.jstree("open_node", actifNode);
    
}

function commandTrash(nodeId){
    var sure = confirm("Vous allez supprimer cet élément et tous les éléments enfant. Êtes-vous sûr ?");
    if(sure){$tree.jstree().delete_node(nodeId); }
}

function commandNewHD() {
    actifNode = $tree.jstree(true).get_selected();
    var newId = $tree.jstree(true).get_node("root");
    console.log(newId.children_d.length);
    var node = {
      id: "HD" + (newId.children_d.length + 1),
      text: "E: Nouveau volume",
      type: "volume"
    };
    var newNode = $tree.jstree('create_node', actifNode, node, 'last');
    var datecreat = randomDate(new Date(2016, 0, 1), new Date());
    var timestamp = datecreat.getTime();
    console.log(timestamp);
    var dateMod = timestamp + (86400000 * Math.random());
    $tree.jstree(true).get_node(newNode).data = {};
    $tree.jstree(true).get_node(newNode).data.dateCreat = moment(datecreat).format("DD-MM-YYYY");
    $tree.jstree(true).get_node(newNode).data.dateMod = moment(dateMod).format("DD-MM-YYYY");
    $tree.jstree(true).get_node(newNode).data.capacity = 10000000000;
}


function commandNewCD() {
     actifNode = $tree.jstree(true).get_selected();
     var newId = $tree.jstree(true).get_node("root");
     console.log(newId.children_d.length);
     var node = {
         id: "CD" + (newId.children_d.length + 1),
         text: "G: Nouveau CDROM",
         type: "cdRom"
     };
     var newNode = $tree.jstree('create_node', actifNode, node, 'last');
     var datecreat = randomDate(new Date(2016, 0, 1), new Date());
     var timestamp = datecreat.getTime();
     console.log(timestamp);
     var dateMod = timestamp + (86400000 * Math.random());
     $tree.jstree(true).get_node(newNode).data = {};
     $tree.jstree(true).get_node(newNode).data.dateCreat = moment(datecreat).format("DD-MM-YYYY");
     $tree.jstree(true).get_node(newNode).data.dateMod = moment(dateMod).format("DD-MM-YYYY");
     $tree.jstree(true).get_node(newNode).data.capacity = 65000000;
}
function commandNewDVD() {
     actifNode = $tree.jstree(true).get_selected();
     var newId = $tree.jstree(true).get_node("root");
     console.log(newId.children_d.length);
     var node = {
         id: "DVD" + (newId.children_d.length + 1),
         text: "H: Nouveau DVDROM",
         type: "cdRom"
     };
     var newNode = $tree.jstree('create_node', actifNode, node, 'last');
     var datecreat = randomDate(new Date(2016, 0, 1), new Date());
     var timestamp = datecreat.getTime();
     console.log(timestamp);
     var dateMod = timestamp + (86400000 * Math.random());
     $tree.jstree(true).get_node(newNode).data = {};
     $tree.jstree(true).get_node(newNode).data.dateCreat = moment(datecreat).format("DD-MM-YYYY");
     $tree.jstree(true).get_node(newNode).data.dateMod = moment(dateMod).format("DD-MM-YYYY");
     $tree.jstree(true).get_node(newNode).data.capacity = 47000000000;
}
function commandNewSDCard() {
    actifNode = $tree.jstree(true).get_selected();
    var newId = $tree.jstree(true).get_node("root");
    console.log(newId.children_d.length);
    var node = {
        id: "SD" + (newId.children_d.length + 1),
        text: "I: Nouvelle SDCard",
        type: "sdCard"
    };
    var newNode = $tree.jstree('create_node', actifNode, node, 'last');
    var datecreat = randomDate(new Date(2016, 0, 1), new Date());
    var timestamp = datecreat.getTime();
    console.log(timestamp);
    var dateMod = timestamp + (86400000 * Math.random());
    $tree.jstree(true).get_node(newNode).data = {};
    $tree.jstree(true).get_node(newNode).data.dateCreat = moment(datecreat).format("DD-MM-YYYY");
    $tree.jstree(true).get_node(newNode).data.dateMod = moment(dateMod).format("DD-MM-YYYY");
    $tree.jstree(true).get_node(newNode).data.capacity = 10000000000;
}
function commandNewUsb() {
    actifNode = $tree.jstree(true).get_selected();
    var newId = $tree.jstree(true).get_node("root");
    console.log(newId.children_d.length);
    var node = {
        id: "DVD" + (newId.children_d.length + 1),
        text: "I: Nouvelle SDCard",
        type: "sdCard"
    };
    var newNode = $tree.jstree('create_node', actifNode, node, 'last');
    var datecreat = randomDate(new Date(2016, 0, 1), new Date());
    var timestamp = datecreat.getTime();
    console.log(timestamp);
    var dateMod = timestamp + (86400000 * Math.random());
    $tree.jstree(true).get_node(newNode).data = {};
    $tree.jstree(true).get_node(newNode).data.dateCreat = moment(datecreat).format("DD-MM-YYYY");
    $tree.jstree(true).get_node(newNode).data.dateMod = moment(dateMod).format("DD-MM-YYYY");
    $tree.jstree(true).get_node(newNode).data.capacity = 10000000000;

}
function commandNewPrinter() {
    actifNode = $tree.jstree(true).get_selected();
    var newId = $tree.jstree(true).get_node("root");
    console.log(newId.children_d.length);
    var node = {
        id: "printer" + (newId.children_d.length + 1),
        text: "J: Nouvelle Imprimante",
        type: "printer"
    };
    var newNode = $tree.jstree('create_node', actifNode, node, 'last');
    var datecreat = randomDate(new Date(2016, 0, 1), new Date());
    var timestamp = datecreat.getTime();
    console.log(timestamp);
    var dateMod = timestamp + (86400000 * Math.random());
    $tree.jstree(true).get_node(newNode).data = {};
    $tree.jstree(true).get_node(newNode).data.dateCreat = moment(datecreat).format("DD-MM-YYYY");
    $tree.jstree(true).get_node(newNode).data.dateMod = moment(dateMod).format("DD-MM-YYYY");
    
}
function commandNewScanner() {
     actifNode = $tree.jstree(true).get_selected();
     var newId = $tree.jstree(true).get_node("root");
     console.log(newId.children_d.length);
     var node = {
         id: "scanner" + (newId.children_d.length + 1),
         text: "K: Nouveau scanner",
         type: "scanner"
     };
     var newNode = $tree.jstree('create_node', actifNode, node, 'last');
     var datecreat = randomDate(new Date(2016, 0, 1), new Date());
     var timestamp = datecreat.getTime();
     console.log(timestamp);
     var dateMod = timestamp + (86400000 * Math.random());
     $tree.jstree(true).get_node(newNode).data = {};
     $tree.jstree(true).get_node(newNode).data.dateCreat = moment(datecreat).format("DD-MM-YYYY");
     $tree.jstree(true).get_node(newNode).data.dateMod = moment(dateMod).format("DD-MM-YYYY");
}





function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomSize(min, max){
    return min + Math.floor(Math.random() * Math.floor(max));
}

ext = {};
ext.xls = "Tableur Excel";
ext.txt = "Editeur de text TextEditor";
ext.doc = "Traitement de texte Word";


function euroDate(isodate) {
    var eurodate;
    
    if (!isNaN(isodate[0])){
    let dateObj = new Date(isodate);

    //let eurodate = dateObj.getDate() + '/' + (dateObj.getMonth()+1) + '/' + dateObj.getFullYear();
    eurodate = ('0' + dateObj.getDate()).slice(-2) + '/' + ('0' + (dateObj.getMonth() + 1)).slice(-2) + '/' + dateObj.getFullYear();
    }
    else{eurodate = "-";}

    return eurodate;
}

//Create unique ID
function ID () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

function getNowDate(){
    var today = new Date();
    return today.toISOString().substring(0, 10).replace(/-/g, "/");
}


var $dateCreat = $('#dateCreat').pikaday({
    firstDay: 1,
    format: 'DD-MM-YYYY',
        toString(date, format) {
            // you should do formatting based on the passed format,
            // but we will just return 'D/M/YYYY' for simplicity
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
        },
        parse(dateString, format) {
            // dateString is the result of `toString` method
            const parts = dateString.split('/');
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1] - 1, 10);
            const year = parseInt(parts[1], 10);
            return new Date(year, month, day);
        },
    minDate: new Date(2000, 0, 1),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000, 2020]
});
// chain a few methods for the first datepicker, jQuery style!
//$dateCreat.pikaday('show').pikaday('today');

var $dateMod = $('#dateMod').pikaday({
    firstDay: 1,
    minDate: new Date(2000, 0, 1),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000, 2020]
});
// chain a few methods for the first datepicker, jQuery style!
//$dateMod.pikaday('show').pikaday('nextMonth');
var $dateCreatOrdi = $('#dateCreatOrdi').pikaday({
    firstDay: 1,
    minDate: new Date(2000, 0, 1),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000, 2020]
});
// chain a few methods for the first datepicker, jQuery style!
//$dateCreat.pikaday('show').pikaday('nextMonth');

var $dateModOrdi = $('#dateModOrdi').pikaday({
    firstDay: 1,
    minDate: new Date(2000, 0, 1),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000, 2020]
});

var $dateLastAccess = $('#dateLastAccess').pikaday({
    firstDay: 1,
    minDate: new Date(2000, 0, 1),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000, 2020]
});
var content = "<input type='text' class='bss-input' onKeyDown='event.stopPropagation();' onKeyPress='addSelectInpKeyPress(this,event)' onClick='event.stopPropagation()' placeholder='Add item'> <span class='glyphicon glyphicon-plus addnewicon' onClick='addSelectItem(this,event,1);'></span>";

var divider = $('<option/>')
    .addClass('divider')
    .data('divider', true);


var addoption = $('<option/>', {
        class: 'addItem'
    })
    .data('content', content)

$('.selectpicker')
    .append(divider)
    .append(addoption)
    .selectpicker();



function addSelectItem(t, ev) {
    ev.stopPropagation();

    var bs = $(t).closest('.bootstrap-select')
    var txt = bs.find('.bss-input').val().replace(/[|]/g, "");
    var txt = $(t).prev().val().replace(/[|]/g, "");
    if ($.trim(txt) == '') return;

    // Changed from previous version to cater to new
    // layout used by bootstrap-select.
    var p = bs.find('select');
    var o = $('option', p).eq(-2);
    o.before($("<option>", {
        "selected": true,
        "text": txt
    }));
    p.selectpicker('refresh');
}

function addSelectInpKeyPress(t, ev) {
    ev.stopPropagation();

    // do not allow pipe character
    if (ev.which == 124) ev.preventDefault();

    // enter character adds the option
    if (ev.which == 13) {
        ev.preventDefault();
        addSelectItem($(t).next(), ev);
    }
}
$(".massivFolders").click(function(){
    let NFolderListString = $("#addRepList").val();
    console.log(NFolderListString);
    NFolderListString = NFolderListString.replace(/\s/g, '')
    var NFolderList = NFolderListString.split(",");
    NFolderList = _.uniq(NFolderList);
    console.log(NFolderList);

    for (let i = 0; i < NFolderList.length; i++) {
        commandNewFolder(NFolderList[i]); 
    }
    
});

$(".massivFiles").click(function () {
    let NFileListString = $("#addFileList").val();
    console.log(NFileListString);
    NFileListString = NFileListString.replace(/\s/g, '')
    var NFileList = NFileListString.split(",");
    console.log(NFileList);
    NFileList = _.uniq(NFileList);

    for (let i = 0; i < NFileList.length; i++) {
        commandNewFile(NFileList[i]);
    }

})



//$('<a href="data:' + exploToJson() + '" download="explo.json">download JSON</a>').appendTo('.jsonExporterLink');
$(".exporter").click(function(){
    console.log("toto");
    exploToJson();
})

function exploToJson(){
    console.log("inside ExploToJson");
    var nodeObj = $tree.jstree(true).get_json('#', { flat: true })
    var mapFile = [];
    var treeFolder = [];
    var explorer = {}
    var data;
    //var mytext = JSON.stringify(v);
    for (let i = 0; i < nodeObj.length; i++) {
        if (nodeObj[i].type == "file"){
            //console.log(nodeObj[i]);
            var mapFileElement = {};
            mapFileElement.fileId = nodeObj[i].id;
            mapFileElement.node = nodeObj[i].parent;
            var shortName = nodeObj[i].text.split('.');
            console.log(shortName);
            //-------------------------------
            mapFileElement.name = shortName[0];
            console.log( shortName[1]);
            mapFileElement.extension = "."+shortName[1];
            //-------------------------------
            mapFileElement.size = nodeObj[i].data.size;
            mapFileElement.dateMod = nodeObj[i].data.dateMod; // Watch date format with moment
            mapFileElement.dateCreat = nodeObj[i].data.dateCreat;// Watch date format with moment
            mapFileElement.app = nodeObj[i].data.application;
            mapFileElement.image_url = nodeObj[i].data.image_url;
            mapFileElement.dateLastAcces = nodeObj[i].data.dateLastAccess;// Watch date format with moment
            mapFileElement.author = nodeObj[i].data.author;
            mapFileElement.content = nodeObj[i].data.content;
            mapFile.push(mapFileElement);
        }
        else{
            treeFolder.push(nodeObj[i]);
            //console.log(nodeObj[i]); 
        }
        console.log(mapFile);
        console.log(treeFolder);
    }
    explorer.mapFile = mapFile;
    
    cleanAllFiles(); // Clean file from treefolder.
    explorer.treeFolder = clearIconTree(); // Return a clean icon (empty) of treefolder
    data = JSON.stringify(explorer);
    console.log(data);
    consoleSave(data, "explo.json");
return data ;   
}

function clearIconTree(){
    for (let i = 0; i < treeFolder.length; i++) {
        treeFolder[i].icon = "";
    }
    return treeFolder;
}

function cleanAllFiles() { // Loop inverse to delete element 
    for (let i = treeFolder.length -1; i >=0 ; i--) {
        if(treeFolder[i].type == "file"){
            treeFolder.splice(i, 1);
        }
        
    }
}

function consoleSave(data, filename) {
    console.log("ici");
    if (!data) {
        console.error('Console.save: No data');
        return;
    }

    if (!filename) filename = 'console.json';

    if (typeof data === "object") {
        data = JSON.stringify(data, undefined, 4);
    }

    var blob = new Blob([data], { type: 'text/json' }),
        e = document.createEvent('MouseEvents'),
        a = document.createElement('a');

    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
}

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
        }

        reader.readAsDataURL(input.files[0]);
    }
}



function openLib(){
    console.log("tracke");
    $(".piclib").slideToggle("slow", function () {
        // Animation complete.
    });
}

function getImgPath(fileImg){
    $("#urlImg").val(fileImg.src);
}

function deleteImg(fileImg) {
    console.log(fileImg);
    console.log(fileImg[0].id)
    $.ajax({
        url: 'deletefile.php',
        type: 'post',
        data: {
            path: fileImg[0].id,
            request: 2
        },
        success: function (response) {
            // Remove <div >
            console.log(fileImg[0].id);
            let justName = fileImg[0].id.split('.');
            if (response == 1) {
                console.log(justName[0]);
                $("." + justName[0]).remove();
            }
        }
    });
}

$("#but_upload").click(function () {
    var fd = new FormData();
    var files = $('#imgInput')[0].files[0];
    fd.append('file', files);
    fd.append('request', 1);
    // AJAX request
    $.ajax({
        url: 'uploadimg.php',
        type: 'post',
        data: fd,
        contentType: false,
        processData: false,
        success: function (response) {
            if (response != 0) {
                var count = $('.container .content').length;
                count = Number(count) + 1;
                let soloName = response.split("/");
                // Show image preview with Delete button
                $('.piclib').append('<div class="content" id="content_"' + count + '"><a href="#"><div class="imgcollitem"><div class="crossDell"></div><img src=" ' + response + ' " alt="path" width="100px" onclick="getImgPath(this)"><figcaption>' + soloName[1] + ' <img id="toto" class="redCross" onclick="deleteImg($(this))" title="Supprimer image?" src="img/closeRed.png"></figcaption></div></a>"</div>');
                let currentLocation = "http://localhost/explogen/";
                $("#urlImg").val(currentLocation + response);
            } else {
                alert('file not uploaded');
            }
        }
    });
});

/* var obj = { a: 123, b: "4 5 6" };
var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
 */


/* var obj = { a: 123, b: "4 5 6" };
var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
var jsonLink = "<a href='data:'" + data + " download='data.json'>download JSON ->PCI</a>"
var $itemMenu = $(".jsonExporterLink");
$itemMenu.html(jsonLink); */