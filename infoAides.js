var aides = 
{
	0:{
		"acro":"BCS",
		"desc":"La Bourse d'enseignement supérieur sur Critères Sociaux est accordée à l'étudiant qui a des difficultés matérielles pour poursuivre des études supérieures. Elle complète l'aide de la famille et ne remplace pas l'obligation alimentaire à la charge des parents.\n-Avoir moins de 28 ans\n-Être titulaire d'un BAC français",
		"age_max":28,
		"bac":true,
		"echelon":[[33100,22500,18190,16070,13990,11950,7540,250],		//[points de charge][echelon]
				   [36760,25000,20210,17850,15540,13280,8370,500],		//					  ^^^
				   [40450,27500,22230,19640,17100,14600,9220,750],		//				chercher revenu
				   [44120,30000,24250,21430,18640,15920,10050,1000],
				   [47800,32500,26270,23210,20200,17250,10880,1250],
				   [51480,35010,28300,25000,21760,18580,11730,1500],
				   [55150,37510,30320,26770,23310,19910,12570,1750],
				   [58830,40010,32340,28560,24860,21240,13410,2000],
				   [62510,42510,34360,30350,26420,22560,14240,2250],
				   [66180,45000,36380,32130,27970,23890,15080,2500],
				   [69860,47510,38400,33920,29520,25220,15910,2750],
				   [73540,50010,40410,35710,31090,26540,16750,3000],
				   [77210,52500,42430,37490,32630,27870,17590,3250],
				   [80890,55000,44450,39280,34180,29200,18420,3500],
				   [84560,57520,46480,41050,35750,30530,19270,3750],
				   [88250,60010,48500,42840,37300,31860,20110,4000],
				   [91920,62510,50520,44630,38840,33190,20940,4250],
				   [95610,65010,52540,46410,40400,34510,21780,4500]],
		"bourse":[100.90,166.90,251.30,321.80,392.40,450.50,477.80,555.10]		//[echelon]
	},
	1:{
		"acro":"ASAA",
		"desc":"L’Aide Spécifique Annuelle est une aide financière accordée aux étudiants qui doivent faire face à des difficultés spécifiques durables et qui ne peuvent prétendre à l’attribution d’une  bourse de l’enseignement supérieur.\n-Pas de soutien matériel des parents\n-Salarié avec revenus annuels au moins égal à 3 SMIC",
		"age_max":35,
		"bac":true,
		"status":"autonome",
		// et-ou
		"profession":["Salarié","Cadre","Auto-entrepreneur","Etudiant en Alternance"],// sinon tout
		// et
		"revenus_min":250
	},
	2:{
		"acro":"ASAP",
		"desc":"Les Aides Spécifiques sont destinées à apporter une aide à l’étudiant qui rencontre des difficultés financières particulières.\nElle peut revêtir deux formes :\nsoit une aide ponctuelle pour des difficultés exceptionnelles et passagères,\nsoit une aide annuelle en cas de difficultés pérennes.\n-",
		"age_max":35,
		"bac":true,
		"profession":["Etudiant en Informatique","Etudiant en Droit","Etudiant en Chimie","Etudiant en GEA","Etudiant en Biologie","Etudiant en Génie civile","Etudiant en PACES","Etudiant en Génie electrique","Etudiant en Medecine","Etudiant Sage femme","Etudiant Infirmier","Etudiant en Pharmacie","Etudiant en Kiné","Etudiant en Psychologie","Etudiant en Lettre","Etudiant Science politique","Etudiant en Géographie","Etudiant en Architecture","Etudiant en Alternance","Année de césure","Erasmus","Mi-temps"],
		"echelon":[[33100,22500],		//[points de charge][echelon]
				   [36760,25000],		//					  ^^^
				   [40450,27500],		//				chercher revenu
				   [44120,30000],
				   [47800,32500],
				   [51480,35010],
				   [55150,37510],
				   [58830,40010],
				   [62510,42510],
				   [66180,45000],
				   [69860,47510],
				   [73540,50010],
				   [77210,52500],
				   [80890,55000],
				   [84560,57520],
				   [88250,60010],
				   [91920,62510],
				   [95610,65010]],
		"bourse":[100.90,166.90]		//[echelon]
	},
	3:{
		"acro":"",
		"desc":"",
		"age_max":"",
		"bac":""
	},
	4:{
		"acro":"",
		"desc":"",
		"age_max":"",
		"bac":""
	},
	5:{
		"acro":"",
		"desc":"",
		"age_max":"",
		"bac":""
	},
	6:{
		"acro":"",
		"desc":"",
		"age_max":"",
		"bac":""
	},
	7:{
		"acro":"",
		"desc":"",
		"age_max":"",
		"bac":""
	},
	8:{
		"acro":"",
		"desc":"",
		"age_max":"",
		"bac":""
	}
};

console.log(aides[0].echelon[15][4]);
