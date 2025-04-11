// Adresse du smart contract et son ABI (tiré du fichier abi (2).txt)
const contractAddress = "0x7CaC9FE613eB0828b4ae781a6215c56049a21275";
const contractABI = 
[
  
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        }
      ],
      "name": "addResolution",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_resolutionId",
          "type": "uint256"
        }
      ],
      "name": "closeResolution",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_president",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_scrutateur",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_resolutionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_title",
          "type": "string"
        }
      ],
      "name": "ResolutionAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_president",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_scrutateur",
          "type": "address"
        }
      ],
      "name": "RolesUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newSecretary",
          "type": "address"
        }
      ],
      "name": "transferSecretary",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_president",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_scrutateur",
          "type": "address"
        }
      ],
      "name": "updateRoles",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_voter",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_status",
          "type": "bool"
        }
      ],
      "name": "updateWhiteList",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_resolutionId",
          "type": "uint256"
        },
        {
          "internalType": "enum Election.VoteOption",
          "name": "_voteOption",
          "type": "uint8"
        }
      ],
      "name": "vote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_resolutionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "enum Election.VoteOption",
          "name": "_voteOption",
          "type": "uint8"
        }
      ],
      "name": "VotedEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "_status",
          "type": "bool"
        }
      ],
      "name": "WhiteListUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_resolutionId",
          "type": "uint256"
        }
      ],
      "name": "getVoteCounts",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "pour",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "contre",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "neutre",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "hasVoted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "president",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "resolutions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "voteCountPour",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "voteCountContre",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "voteCountNeutre",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isActive",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "resolutionsCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "scrutateur",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "secretaire",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "whiteList",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  
];

let provider;
let signer;
let contract;
let currentAccount;

// Fonction pour vérifier que MetaMask est installé
async function checkMetaMask() {
  if (typeof window.ethereum === "undefined") {
    alert("MetaMask n'est pas installé. Veuillez l'installer pour utiliser cette application.");
    return false;
  }
  return true;
}

// Connexion à MetaMask et initialisation d'ethers.js
async function connectWallet() {
  // Désactiver le bouton pendant la connexion
  const button = document.getElementById("connectButton");
  button.disabled = true;
  button.textContent = "Connexion en cours...";
  
  if (!(await checkMetaMask())) {
    button.disabled = false;
    button.textContent = "Se connecter avec MetaMask";
    return;
  }
  
  try {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    currentAccount = accounts[0];
    
    // Formater l'adresse pour l'affichage (raccourcir au milieu)
    const shortAddress = currentAccount.substring(0, 6) + "..." + currentAccount.substring(currentAccount.length - 4);
    document.getElementById("accountInfo").innerHTML = `Compte connecté : <strong>${shortAddress}</strong> <small>(${currentAccount})</small>`;
    
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    
    // Vérifier le réseau
    const network = await provider.getNetwork();
    let networkName;
    
    switch(network.chainId) {
      case 1:
        networkName = "Ethereum Mainnet";
        break;
      case 11155111:
        networkName = "Sepolia Testnet";
        break;
      default:
        networkName = network.name;
    }
    
    document.getElementById("networkInfo").innerHTML = `Réseau : <strong>${networkName}</strong> (chainId: ${network.chainId})`;
    
    // Initialiser le contrat
    contract = new ethers.Contract(contractAddress, contractABI, signer);
    
    // Vérifier si l'utilisateur est dans la liste blanche
    const isWhitelisted = await contract.whiteList(currentAccount);
    if (isWhitelisted) {
      document.getElementById("accountInfo").innerHTML += ' <span class="status-badge active">Liste blanche ✓</span>';
    } else {
      document.getElementById("accountInfo").innerHTML += ' <span class="status-badge closed">Non autorisé</span>';
    }
    
    // Afficher les rôles et les résolutions
    await afficherRoles();
    await afficherResolutions();
    
    // Changer le bouton de connexion
    button.textContent = "Connecté";
    button.style.backgroundColor = "#2ecc71";
    button.disabled = true;
    
  } catch (error) {
    console.error(error);
    alert("Erreur lors de la connexion à MetaMask.");
    button.disabled = false;
    button.textContent = "Se connecter avec MetaMask";
  }
}

// Affiche les rôles de l'utilisateur en comparant son adresse avec le contrat
async function afficherRoles() {
  document.getElementById("roleSection").style.display = "block";
  let roleInfo = "";
  try {
    const president = await contract.president();
    const scrutateur = await contract.scrutateur();
    const secretaire = await contract.secretaire();
    
    if (currentAccount.toLowerCase() === president.toLowerCase()) {
      roleInfo += "• Vous êtes Président de séance\n";
    }
    if (currentAccount.toLowerCase() === scrutateur.toLowerCase()) {
      roleInfo += "• Vous êtes Scrutateur\n";
      document.getElementById("scrutateurSection").style.display = "block";
    }
    if (currentAccount.toLowerCase() === secretaire.toLowerCase()) {
      roleInfo += "• Vous êtes Secrétaire (propriétaire du contrat)\n";
      document.getElementById("adminSection").style.display = "block";
    }
    if (roleInfo === "") {
      roleInfo = "Vous n'avez pas de rôle administratif particulier. Vous pouvez voter sur les résolutions actives si vous êtes dans la liste blanche.";
    }
    document.getElementById("roleInfo").innerText = roleInfo;
  } catch (error) {
    console.error("Erreur lors de la récupération des rôles :", error);
    document.getElementById("roleInfo").innerText = "Erreur lors de la récupération des rôles";
  }
}

// Affiche la liste des résolutions et propose de voter si possible
async function afficherResolutions() {
  document.getElementById("resolutionsSection").style.display = "block";
  const resolutionsListDiv = document.getElementById("resolutionsList");
  resolutionsListDiv.innerHTML = "<p>Chargement des résolutions...</p>";
  
  try {
    const countBN = await contract.resolutionsCount();
    const count = countBN.toNumber();
    
    if (count === 0) {
      resolutionsListDiv.innerHTML = "<p>Aucune résolution disponible.</p>";
      return;
    }
    
    resolutionsListDiv.innerHTML = "";
    
    for (let i = 1; i <= count; i++) {
      let res = await contract.resolutions(i);
      // Récupérer les compteurs de votes via getVoteCounts
      let counts = await contract.getVoteCounts(i);
      // Vérifier si l'utilisateur a déjà voté
      let aVote = await contract.hasVoted(i, currentAccount);
      
      // Calculer le total des votes
      const totalVotes = parseInt(counts.pour) + parseInt(counts.contre) + parseInt(counts.neutre);
      
      // Créer une section pour la résolution
      const resDiv = document.createElement("div");
      resDiv.classList.add("resolution");
      resDiv.innerHTML = `
        <div class="resolution-header">
          <strong>Résolution ${res.id}</strong>
          <span class="status-badge ${res.isActive ? 'active' : 'closed'}">${res.isActive ? 'Active' : 'Clôturée'}</span>
        </div>
        <div class="resolution-title">${res.title}</div>
        
        <div class="vote-details">
          <span class="vote-count vote-pour">POUR: ${counts.pour.toString()}</span>
          <span class="vote-count vote-contre">CONTRE: ${counts.contre.toString()}</span>
          <span class="vote-count vote-neutre">NEUTRE: ${counts.neutre.toString()}</span>
          <span>Total: ${totalVotes} vote${totalVotes > 1 ? 's' : ''}</span>
        </div>
        
        ${aVote ? "<div class='vote-status'><em>Vous avez déjà voté pour cette résolution</em></div>" : ""}
      `;
      
      // Ajouter la section de vote si l'utilisateur n'a pas encore voté et si la résolution est active
      if (!aVote && res.isActive) {
        const voteSection = document.createElement("div");
        voteSection.classList.add("vote-section");
        voteSection.innerHTML = `
          <select id="selectVote_${res.id}" class="vote-select">
            <option value="0">POUR</option>
            <option value="1">CONTRE</option>
            <option value="2">NEUTRE</option>
          </select>
          <button class="voteBtn" data-id="${res.id}">Voter</button>
        `;
        resDiv.appendChild(voteSection);
      }
      
      resolutionsListDiv.appendChild(resDiv);
    }
    
    // Ajouter les événements de vote aux boutons
    document.querySelectorAll(".voteBtn").forEach(btn => {
      btn.addEventListener("click", async function() {
        const resolutionId = this.getAttribute("data-id");
        const selectedOption = document.getElementById("selectVote_" + resolutionId).value;
        
        // Désactiver le bouton pendant le vote
        this.disabled = true;
        this.textContent = "Vote en cours...";
        
        await voter(resolutionId, selectedOption);
        
        // Réactiver le bouton en cas d'échec (le succès rechargera la page)
        this.disabled = false;
        this.textContent = "Voter";
      });
    });
    
  } catch (error) {
    console.error("Erreur lors de l'affichage des résolutions :", error);
    resolutionsListDiv.innerHTML = "<p>Erreur lors du chargement des résolutions.</p>";
  }
}

// Fonction pour voter sur une résolution
async function voter(resolutionId, optionVote) {
  try {
    // Afficher un message de confirmation
    const options = ["POUR", "CONTRE", "NEUTRE"];
    if (!confirm(`Confirmer votre vote "${options[optionVote]}" pour la résolution ${resolutionId} ?`)) {
      return;
    }
    
    const tx = await contract.vote(resolutionId, optionVote);
    
    // Afficher une notification de transaction en attente
    const notif = document.createElement("div");
    notif.className = "transaction-notification";
    notif.innerHTML = `Transaction en cours... <small>${tx.hash}</small>`;
    document.body.appendChild(notif);
    
    await tx.wait();
    
    // Supprimer la notification
    document.body.removeChild(notif);
    
    alert("Vote enregistré avec succès !");
    await afficherResolutions();
  } catch (error) {
    console.error("Erreur lors du vote :", error);
    
    // Message d'erreur plus précis en fonction de l'erreur
    if (error.message.includes("whitelist")) {
      alert("Vous n'êtes pas autorisé à voter. Veuillez contacter le secrétaire pour être ajouté à la liste blanche.");
    } else if (error.message.includes("already voted")) {
      alert("Vous avez déjà voté pour cette résolution.");
    } else if (error.message.includes("not active")) {
      alert("Cette résolution n'est plus active.");
    } else {
      alert("Erreur lors du vote. " + error.message);
    }
  }
}

// Fonction admin : ajouter une résolution (secrétaire)
async function ajouterResolution() {
  const titre = document.getElementById("resTitle").value;
  if (!titre) {
    alert("Veuillez renseigner un titre.");
    return;
  }
  
  const button = document.getElementById("addResolutionButton");
  button.disabled = true;
  button.textContent = "Ajout en cours...";
  
  try {
    const tx = await contract.addResolution(titre);
    await tx.wait();
    alert("Résolution ajoutée avec succès !");
    document.getElementById("resTitle").value = "";
    await afficherResolutions();
  } catch (error) {
    console.error("Erreur lors de l'ajout de la résolution :", error);
    alert("Erreur lors de l'ajout de la résolution : " + error.message);
  } finally {
    button.disabled = false;
    button.textContent = "Ajouter";
  }
}

// Fonction admin : mettre à jour la liste blanche
async function updateWhitelist() {
  const addr = document.getElementById("whitelistAddress").value;
  const status = document.getElementById("whitelistStatus").value === "true";
  
  if (!ethers.utils.isAddress(addr)) {
    alert("L'adresse saisie n'est pas une adresse Ethereum valide.");
    return;
  }
  
  const button = document.getElementById("updateWhitelistButton");
  button.disabled = true;
  button.textContent = "Mise à jour en cours...";
  
  try {
    const tx = await contract.updateWhiteList(addr, status);
    await tx.wait();
    alert(`Adresse ${addr} ${status ? 'ajoutée à' : 'retirée de'} la liste blanche.`);
    document.getElementById("whitelistAddress").value = "";
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la liste blanche :", error);
    alert("Erreur lors de la mise à jour de la liste blanche : " + error.message);
  } finally {
    button.disabled = false;
    button.textContent = "Mettre à jour";
  }
}

// Fonction admin : mettre à jour les rôles (président et scrutateur)
async function updateRoles() {
  const newPres = document.getElementById("newPresident").value;
  const newScrut = document.getElementById("newScrutateur").value;
  
  if (!ethers.utils.isAddress(newPres) || !ethers.utils.isAddress(newScrut)) {
    alert("Les adresses saisies ne sont pas des adresses Ethereum valides.");
    return;
  }
  
  const button = document.getElementById("updateRolesButton");
  button.disabled = true;
  button.textContent = "Mise à jour en cours...";
  
  try {
    const tx = await contract.updateRoles(newPres, newScrut);
    await tx.wait();
    alert("Rôles mis à jour avec succès !");
    document.getElementById("newPresident").value = "";
    document.getElementById("newScrutateur").value = "";
    await afficherRoles();
  } catch (error) {
    console.error("Erreur lors de la mise à jour des rôles :", error);
    alert("Erreur lors de la mise à jour des rôles : " + error.message);
  } finally {
    button.disabled = false;
    button.textContent = "Mettre à jour les rôles";
  }
}

// Fonction admin : transférer le secrétariat (propriété du contrat)
async function transferSecretary() {
  const newSec = document.getElementById("newSecretary").value;
  
  if (!ethers.utils.isAddress(newSec)) {
    alert("L'adresse saisie n'est pas une adresse Ethereum valide.");
    return;
  }
  
  if (!confirm(`Êtes-vous sûr de vouloir transférer le rôle de secrétaire à l'adresse ${newSec} ? Cette action est irréversible et vous perdrez vos droits d'administration.`)) {
    return;
  }
  
  const button = document.getElementById("transferSecretaryButton");
  button.disabled = true;
  button.textContent = "Transfert en cours...";
  
  try {
    const tx = await contract.transferSecretary(newSec);
    await tx.wait();
    alert("Secrétariat transféré avec succès !");
    document.getElementById("newSecretary").value = "";
    await afficherRoles();
  } catch (error) {
    console.error("Erreur lors du transfert du secrétariat :", error);
    alert("Erreur lors du transfert du secrétariat : " + error.message);
  } finally {
    button.disabled = false;
    button.textContent = "Transférer";
  }
}

// Fonction du scrutateur : clôturer une résolution
async function closeResolution() {
  const resId = document.getElementById("closeResolutionId").value;
  
  if (!resId || isNaN(parseInt(resId))) {
    alert("Veuillez saisir un ID de résolution valide.");
    return;
  }
  
  const button = document.getElementById("closeResolutionButton");
  button.disabled = true;
  button.textContent = "Clôture en cours...";
  
  try {
    // Vérifier que la résolution existe et qu'elle est active
    const resolution = await contract.resolutions(resId);
    if (resolution.id.toString() !== resId) {
      throw new Error("Cette résolution n'existe pas.");
    }
    
    if (!resolution.isActive) {
      throw new Error("Cette résolution est déjà clôturée.");
    }
    
    if (!confirm(`Êtes-vous sûr de vouloir clôturer la résolution ${resId} (${resolution.title}) ? Cette action est irréversible.`)) {
      button.disabled = false;
      button.textContent = "Clôturer";
      return;
    }
    
    const tx = await contract.closeResolution(resId);
    await tx.wait();
    alert("Résolution clôturée avec succès !");
    document.getElementById("closeResolutionId").value = "";
    await afficherResolutions();
  } catch (error) {
    console.error("Erreur lors de la clôture de la résolution :", error);
    alert("Erreur lors de la clôture de la résolution : " + (error.message || error));
  } finally {
    button.disabled = false;
    button.textContent = "Clôturer";
  }
}

// Ajouter une notification de transaction
function addTransactionNotification(hash) {
  const notification = document.createElement("div");
  notification.className = "transaction-notification";
  notification.innerHTML = `
    <div class="notification-content">
      <span>Transaction en cours...</span>
      <small>${hash}</small>
    </div>
    <div class="notification-progress"></div>
  `;
  document.body.appendChild(notification);
  
  // Animation de progression
  const progress = notification.querySelector(".notification-progress");
  let width = 1;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      document.body.removeChild(notification);
    } else {
      width++;
      progress.style.width = width + "%";
    }
  }, 30);
  
  return notification;
}

// Ajout des événements sur les boutons
document.getElementById("connectButton").addEventListener("click", connectWallet);
document.getElementById("addResolutionButton").addEventListener("click", ajouterResolution);
document.getElementById("updateWhitelistButton").addEventListener("click", updateWhitelist);
document.getElementById("updateRolesButton").addEventListener("click", updateRoles);
document.getElementById("transferSecretaryButton").addEventListener("click", transferSecretary);
document.getElementById("closeResolutionButton").addEventListener("click", closeResolution);

// Détection des changements de compte et de réseau dans MetaMask
if (window.ethereum) {
  window.ethereum.on("accountsChanged", () => window.location.reload());
  window.ethereum.on("chainChanged", () => window.location.reload());
}

// Ajout de styles pour les notifications de transaction
const style = document.createElement("style");
style.textContent = `
  .transaction-notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #2c3e50;
    color: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    max-width: 300px;
  }
  
  .notification-content {
    margin-bottom: 10px;
  }
  
  .notification-content small {
    display: block;
    margin-top: 5px;
    color: #3498db;
    word-break: break-all;
  }
  
  .notification-progress {
    height: 4px;
    background-color: #3498db;
    width: 0%;
    transition: width 0.3s;
  }
`;
document.head.appendChild(style);