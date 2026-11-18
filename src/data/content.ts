// Source unique de vérité pour tout le contenu textuel du portfolio.
// Données issues exclusivement du CV de Malang dit Niaka Konaté.

export interface Projet {
  slug: string;
  titre: string;
  sousTitre: string;
  periode: string;
  contexte: string;
  descriptionCourte: string;
  descriptionComplete: string[];
  pointsCles: string[];
  technologies: string[];
  lienDemo?: string; // TODO: Fournir le lien de démo si disponible
  lienGithub?: string; // TODO: Fournir le lien GitHub si disponible
  image?: string; // TODO: Fournir une capture d'écran (ex: /images/projets/...)
}

export interface CategorieCompetence {
  titre: string;
  icone: "ShieldCheck" | "Network" | "Server" | "Code2";
  competences: string[];
}

export interface Formation {
  diplome: string;
  etablissement: string;
  periode: string;
  description?: string;
}

export interface Langue {
  nom: string;
  niveau: string;
}

export const donneesPortfolio = {
  identite: {
    prenom: "Malang",
    surnom: "dit Niaka",
    nom: "Konaté",
    nomComplet: "Malang dit Niaka Konaté",
    titrePrincipal: "Étudiant en Licence 3 Cybersécurité",
    sousTitre: "Sécurité applicative · Systèmes · Réseaux · Développement",
    bioCourte:
      "Étudiant en 3ème année de Licence Cybersécurité à l'ISI Dakar, orienté sécurité applicative et analyse de vulnérabilités. Je développe des outils d'analyse de sécurité, j'administre des infrastructures systèmes et réseaux, et j'implémente des solutions logicielles sécurisées.",
    localisation: "Dakar, Sénégal",
    email: "Konatemalang080@gmail.com",
    sujetEmailContact: "Prise de contact via portfolio",
    cvPath: "/cv.pdf",
    photoProfil: "/images/photo-profil.jpg", // TODO: Fournir une photo de profil
    liensSociaux: {
      github: "https://github.com/", // TODO: Remplacer par l'URL de profil GitHub exacte
      linkedin: "https://linkedin.com/in/", // TODO: Remplacer par l'URL de profil LinkedIn exacte
    },
  },

  navigation: [
    { label: "À propos", href: "/#a-propos" },
    { label: "Projets", href: "/#projets" },
    { label: "Compétences", href: "/#competences" },
    { label: "Formation", href: "/#formation" },
    { label: "Contact", href: "/#contact" },
  ],

  langues: [
    { nom: "Français", niveau: "Avancé" },
    { nom: "Anglais", niveau: "Intermédiaire" },
    { nom: "Wolof", niveau: "Langue maternelle" },
  ] as Langue[],

  competences: [
    {
      titre: "Sécurité",
      icone: "ShieldCheck",
      competences: [
        "Wazuh (SIEM/EDR)",
        "pfSense (firewall)",
        "Analyse de vulnérabilités",
        "RSA / ECC",
        "OpenSSL",
        "DHCP Snooping",
        "DAI",
      ],
    },
    {
      titre: "Réseaux",
      icone: "Network",
      competences: [
        "CCNA 1 & 2",
        "VLAN",
        "STP",
        "EtherChannel",
        "OSPF",
        "DHCP",
        "HSRP / VRRP",
        "802.1X",
        "WLC",
        "AAA",
      ],
    },
    {
      titre: "Systèmes & Cloud",
      icone: "Server",
      competences: [
        "Windows Server 2022 (AD DS, GPO, WDS, MDT, PowerShell)",
        "Ubuntu",
        "AlmaLinux",
        "VMware",
        "Git / GitHub",
        "Supabase",
        "Vercel",
      ],
    },
    {
      titre: "Développement",
      icone: "Code2",
      competences: [
        "Python",
        "Java",
        "C",
        "Bash",
        "JavaScript / TypeScript",
        "PHP",
        "SQL",
        "Next.js 14",
        "React",
        "Flask",
        "Node.js",
        "PostgreSQL",
        "MySQL",
        "SQLite",
        "MongoDB",
      ],
    },
  ] as CategorieCompetence[],

  projets: [
    {
      slug: "leaksentinel",
      titre: "LeakSentinel",
      sousTitre: "Détection de secrets exposés dans le code source",
      periode: "2025",
      contexte: "Projet académique (cours Sécurité)",
      descriptionCourte:
        "Outil de détection de fuites de secrets combinant expressions régulières et calcul d'entropie de Shannon.",
      descriptionComplete: [
        "LeakSentinel est une application dédiée à l'analyse statique de code pour détecter l'exposition accidentelle de secrets et clés d'API.",
        "Le moteur d'analyse s'appuie sur des motifs regex ciblés couplés à l'évaluation de l'entropie de Shannon pour repérer des chaînes à haute aléatoirité.",
        "Le projet gère les statuts de scan et classe les vulnérabilités identifiées selon des niveaux de criticité allant de 'low' à 'critical'.",
      ],
      pointsCles: [
        "Détection par regex et entropie de Shannon",
        "Niveaux de risque classés de low à critical",
        "Gestion complète des statuts de scan",
        "22 tests unitaires et d'intégration validés avec pytest",
      ],
      technologies: ["Python", "Flask", "SQLite", "pytest"],
      lienGithub: undefined, // TODO: Fournir le lien du repo LeakSentinel
      lienDemo: undefined, // TODO: Fournir le lien de démo si hébergé
    },
    {
      slug: "cryptographie-java",
      titre: "Cryptographie Java — RSA 2048 & ECC",
      sousTitre: "Implémentation d'algorithmes asymétriques et signatures",
      periode: "2025",
      contexte: "Projet académique / Personnel",
      descriptionCourte:
        "Génération de paires de clés RSA 2048 (CRT) et ECC, chiffrement/déchiffrement et signature numérique.",
      descriptionComplete: [
        "Implémentation complète en Java d'opérations cryptographiques asymétriques conformes aux standards de sécurité actuels.",
        "Génération et manipulation de clés RSA avec optimisation CRT (Théorème des Restes Chinois) et de courbes elliptiques (ECC).",
        "Export et encodage des clés au format PEM standardisé dans 4 fichiers distincts pour l'interopérabilité.",
      ],
      pointsCles: [
        "Génération de clés RSA 2048 avec CRT et clés ECC",
        "Export PEM standardisé en 4 fichiers distincts",
        "Chiffrement et déchiffrement asymétrique RSA",
        "Signature numérique et vérification cryptographique ECC",
      ],
      technologies: ["Java", "JDK 17", "IntelliJ IDEA", "Cryptographie"],
      lienGithub: undefined, // TODO: Fournir le lien du repo Cryptographie Java
    },
    {
      slug: "deploiement-windows-server",
      titre: "Déploiement Windows Server — WDS / MDT & hMailServer",
      sousTitre: "Automatisation de poste client et service de messagerie",
      periode: "2025",
      contexte: "Infrastructure & Virtualisation",
      descriptionCourte:
        "Déploiement automatisé en réseau de Windows 11 25H2 via WDS/MDT et configuration d'un serveur de messagerie.",
      descriptionComplete: [
        "Mise en place d'un environnement virtualisé sous VMware pour orchestrer le déploiement automatisé de postes clients Windows 11.",
        "Configuration complète des services WDS (Windows Deployment Services) et MDT (Microsoft Deployment Toolkit) avec ADK et environnement WinPE.",
        "Déploiement et sécurisation d'un serveur de messagerie interne hMailServer avec interconnexion de deux boîtes mail et configuration des clients Thunderbird.",
      ],
      pointsCles: [
        "Déploiement automatisé réseau de Windows 11 25H2 (WDS, MDT, ADK/WinPE)",
        "Configuration de deux boîtes mail sur hMailServer",
        "Validation des flux de messagerie avec clients Mozilla Thunderbird",
        "Environnement virtualisé sous VMware Workstation",
      ],
      technologies: ["Windows Server 2022", "WDS", "MDT", "WinPE", "ADK", "hMailServer", "VMware"],
      lienGithub: undefined,
    },
    {
      slug: "contractai",
      titre: "ContractAI",
      sousTitre: "SaaS B2B de gestion de contrats fournisseurs",
      periode: "2025",
      contexte: "Application Web Fullstack",
      descriptionCourte:
        "Plateforme moderne de gestion, téléversement et analyse intelligente de contrats professionnels.",
      descriptionComplete: [
        "ContractAI est une plateforme SaaS conçue pour centraliser et auditer les contrats fournisseurs d'entreprises.",
        "L'application intègre une authentification robuste, un tableau de bord analytique et des fonctionnalités avancées d'upload et de prévisualisation documentaire.",
        "Déploiement continu automatisé sur Vercel avec persistance relationnelle sur PostgreSQL managé par Supabase.",
      ],
      pointsCles: [
        "Authentification sécurisée des utilisateurs",
        "Tableau de bord de gestion et suivi des contrats",
        "Téléversement et visualisation de documents",
        "Pipeline CI/CD sur Vercel et base PostgreSQL via Supabase",
      ],
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "API Claude", "Vercel"],
      lienGithub: undefined, // TODO: Fournir le lien GitHub ContractAI
      lienDemo: undefined, // TODO: Fournir le lien de production Vercel
    },
    {
      slug: "portfolio-cybersecurite-python",
      titre: "Portfolio Cybersécurité Python",
      sousTitre: "Suite d'outils de sécurité : Reiatsu Vault, PhishGuard, SecureLog, CyberWatch Lite",
      periode: "2024 - 2025",
      contexte: "Projets de sécurité défensive & outillage",
      descriptionCourte:
        "Ensemble d'outils modulaires développés en Python pour la gestion de secrets, la détection de phishing et l'analyse de logs.",
      descriptionComplete: [
        "Collection d'utilitaires de cybersécurité développés en Python pour répondre à des problématiques opérationnelles concrètes.",
        "Reiatsu Vault : coffre-fort sécurisé pour le stockage chiffré d'identifiants.",
        "PhishGuard : analyseur d'URLs et d'en-têtes pour la détection de tentatives de phishing.",
        "SecureLog & CyberWatch Lite : surveillance d'événements et analyse automatisée de journaux de sécurité.",
      ],
      pointsCles: [
        "Reiatsu Vault (chiffrement et gestion de secrets)",
        "PhishGuard (détection et analyse d'indicateurs de phishing)",
        "SecureLog (gestion et intégrité de logs d'événements)",
        "CyberWatch Lite (surveillance et alertes de sécurité)",
      ],
      technologies: ["Python", "Cryptographie", "Sécurité défensive", "Regex", "Parsing de logs"],
      lienGithub: undefined, // TODO: Fournir le lien du repo ou des sous-projets
    },
    {
      slug: "nayra-hijab",
      titre: "Nayra Hijab",
      sousTitre: "Plateforme e-commerce avec passerelle PayDunya",
      periode: "2024 - 2025",
      contexte: "Application Web E-commerce",
      descriptionCourte:
        "Boutique en ligne moderne avec catalogue de produits, panier dynamique et intégration de paiement PayDunya.",
      descriptionComplete: [
        "Développement d'un site e-commerce fluide et réactif construit avec React et Vite.",
        "Intégration de la passerelle de paiement locale PayDunya pour les transactions sécurisées.",
        "Stockage et synchronisation des données produits et commandes sur Supabase.",
      ],
      pointsCles: [
        "Catalogue interactif et gestion d'état du panier",
        "Intégration de paiement en ligne avec l'API PayDunya",
        "Backend serverless et persistance via Supabase",
        "Déploiement et hébergement optimisé sur Vercel",
      ],
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Supabase", "PayDunya", "Vercel"],
      lienGithub: undefined, // TODO: Fournir le lien du repo Nayra Hijab
      lienDemo: undefined, // TODO: Fournir le lien de démo
    },
  ] as Projet[],

  formation: [
    {
      diplome: "Licence 3 — Cybersécurité",
      etablissement: "Institut Supérieur d'Informatique (ISI) · Dakar, Sénégal",
      periode: "En cours",
      description:
        "Formation axée sur la sécurité des systèmes et réseaux, la cryptographie, l'audit de sécurité et le développement sécurisé.",
    },
    {
      diplome: "CCNA 2 — Switching, Routing & Wireless Essentials",
      etablissement: "Cisco Networking Academy",
      periode: "2025 – en cours",
      description:
        "Configuration et dépannage de routeurs et commutateurs, protocoles de redondance, VLANs, STP, EtherChannel et réseaux sans fil.",
    },
    {
      diplome: "Baccalauréat",
      etablissement: "Dakar, Sénégal",
      periode: "2024",
    },
  ] as Formation[],
};
