import React from "react";
import {FixedSizeList as List} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";

const list = [
    ['Clinical evaluation of an automated virtual surgical planning platform for mandibular reconstruction', 'https://doi.org/10.1002/hed.26404','Edward Wang BASc, J. Scott Durham MD, Donald W. Anderson MD, Eitan Prisman MD'],
    ['Characterizing Motor Control of Mastication With Soft Actor-Critic','https://doi.org/10.3389/fnhum.2020.00188','Abdi AH; Sagl B; Srungarapu VP; Stavness I; Prisman E; Abolmaesumi P; Fels S.'],
    ['Predicting the Premorbid Shape of a Diseased Mandible','https://doi.org/10.1002/lary.29009','Wang E; Tran K L; D\'heygere E; Prisman E.'],
    ['Treatment de-escalation for HPV-associated oropharyngeal squamous cell carcinoma with radiotherapy vs. trans-oral surgery (ORATOR2): study protocol for a randomized phase II trial','https://doi.org/10.1186/s12885-020-6607-z','Nichols AC; Lang P, Prisman E; Berthelet E; et al.'],
    ['Treatment for Recurrent Differentiated Thyroid Cancer: A Canadian Population Based Experience','https://doi.org/10.7759/cureus.7122','Shokoohi A; Berthelet E; Gill S; Prisman E; Sexsmith G; Tran E; White A; Wiseman SM; Wu J; Ho C.'],
    ['88 Radiotherapy Versus Trans-Oral Robotic Surgery for Oropharyngeal Squamous Cell Carcinoma: Results of a Randomized Trial','https://doi.org/10.1016/S0167-8140(19)33379-1','Palma D, Theurer J, Prisman E, de Almeida J, Nichols A et al.'],
    ['Outcomes of free flap reconstructions with near‐infrared spectroscopy (NIRS) monitoring: A systematic review','https://doi.org/10.1002/micr.30526','Newton E, Butskiy O, Shadgan B, Prisman E, Anderson DW.'],
    ['Revisiting the Transverse Cervical Artery and Vein for Complex Head and Neck Reconstruction','https://doi.org/10.1055/s-0039-1692973','Prisman E, Baxter P, Genden E.'],
    ['Radiotherapy vs. Trans-Oral Robotic Surgery for Oropharyngeal Squamous Cell Carcinoma (OPSCC): Results of a Randomized Trial','https://doi.org/10.1016/j.ijrobp.2019.06.485','Palma D, Theurer J, Prisman E, Read N, Berthelet E, Fung K, de Almeida J, Bayley A, Richardson K, Mlynarek A, Krishnan S, Le H, Mitchell S, Chen J, Corsten M, Johnson-Obaseki S, Odell M, Parker C, Kwan K, Nichols A.'],
    ['Headache Outcomes After Treatment of Unruptured Intracranial Aneurysm: A Systematic Review and Meta-Analysis','https://doi.org/10.1161/STROKEAHA.119.026864','Dandurand C, Parhar H, Naji F, Prakash S, Redekpp G, Haw C, Prisman E, Gooderham P.'],
    ['The association between the Nutrition-Related index and morbidity following head and neck microsurgery','https://doi.org/10.1002/lary.27912','Parhar H, Durham J, Anderson D, Rush B, Prisman E.'],
    ['Primary organ preservation vs total laryngectomy for T4a larynx cancer','https://doi.org/10.1002/hed.25838','Oh J, Prisman E, Olson R, Berthelet E, Wu J, Tran E, Bakos B, Kaviani R, Hamilton S.'],
    ['Predicting the Number of Fibular Segments to Reconstruct Mandibular Defects','https://doi.org/10.1002/lary.28473','Shkedy Y, Howlett J, Wang E, Ongko J, Scott Durham J, Prisman E.'],
    ['Radiotherapy versus transoral robotic surgery and neck dissection for oropharyngeal squamous cell carcinoma (ORATOR): an open-label, phase 2, randomised trial','https://doi.org/10.1016/S1470-2045(19)30410-3','Nichols A, Theurer J, Prisman E et al.'],
    ['A phase II randomized trial for early-stage squamous cell carcinoma of the oropharynx: Radiotherapy versus trans-oral robotic surgery (ORATOR)','https://doi.org/10.1200/JCO.2019.37.15_suppl.6006','Nichols A, Theurer J, Prisman E et al.'],
    ['Patient Choice of Nonsurgical Treatment Contributes to Disparities in Head and Neck Squamous Cell Carcinoma','https://doi.org/10.1177/0194599818755353','Parhar HS, Anderson DW. Janjua AS, Durham JS, Prisman E.'],
    ['Post-Acute Care use after Major Head and Neck Oncologic Surgery with Microvascular Reconstruction','https://doi.org/10.1002/lary.27190','Parhar HS, Chang BA, Durham JS, Anderson DW, Hayden R, Prisman E.'],
    ['Identification of malignancy-associated changes in histologically normal tumor-adjacent epithelium of patients with HPV-positive oropharyngeal cancer','https://doi.org/10.1155/2018/1607814','Jabalee J, Carraro A, Ng T, Prisman E, Garnis G, Guillaud M.'],
    ['Potential clinical implications of HPV status and expressions of p53 and cyclin D1 among oropharyngeal cancer patients','https://doi.org/10.1111/jop.12779','Lu X, Liu K, Soares R, Thomson T, Prisman E, Wu J, Poh C.'],
    ['Analysis of readmissions after transoral robotic surgery for oropharyngeal squamous cell carcinoma','https://doi.org/10.1002/hed.25362','Parhar H, Gausden E, Patel J, Prisman E, Anderson D, Durham J, Rush B.'],
    ['Guide design in virtual planning for scapular tip free flap reconstruction','https://doi.org/10.1002/lio2.162','Kass JI, Prisman E, Miles BA.'],
    ['In house virtual surgery and 3D complex head and neck reconstruction','https://doi.org/10.1186/s40463-018-0320-9','Luu K, P Amirreza, Wang E, Prisman E.'],
    ['Ectopic thymoma managed by neck dissection & video-assisted thoracoscopic thymectomy','https://doi.org/10.21037/jtd.2017.10.141','Peel JK, Prisman E, Ng TL, McGuire AL.'],
    ['Revisiting the gastric pull-up for pharyngoesophageal reconstruction: A systematic review and meta-analysis of mortality and morbidity','https://doi.org/10.1002/jso.24477','Butskiy O, Rahmanian R, White RA, Durham S, Anderson DW, Prisman E.'],
    ['Nodal Disease Burden for Early-Stage Oral Cancer','https://doi.org/10.1001/jamaoto.2016.2241','Liu KY, Durham JS, Wu J, Anderson DW, Prisman E, Poh CF.'],
    ['Management algorithm for failed gastric pull up reconstruction of laryngopharyngectomy defects: case report and review of the literature','https://doi.org/10.1186/s40463-016-0153-3','Butskiy O, Anderson DW, Prisman E.'],
    ['Value of preoperative mandibular plating in reconstruction of the mandible','https://doi.org/10.1002/hed.23382','Prisman E, Haerle SK, Irish JC, Daly M, Miles B, Chan H.'],
    ['3D Rapid Prototyping for Otolaryngology-Head and Neck Surgery: Applications in Image-Guidance, Surgical Simulation and Patient-Specific Modeling','https://doi.org/10.1371/journal.pone.0136370','Chan H, Siewerdsen J, Vescan A, Daly M, Prisman E, Irish J.'],
    ['Transoral robotic excision of ectopic lingual thyroid: Case series and literature review','https://doi.org/10.1002/hed.23757','Prisman E, Patsias A, Genden EM.'],
    ['Intraoperative risk management of hyperparathyroidism: Modeling and testing the parathyroidhormone’s evolution as a mean reverting stochastic processes','https://doi.org/10.1016/j.orhc.2013.10.004','Prisman E, Freeman J, Prisman EZ.'],
    ['Transoral Robotic Surgery for Oropharyngeal Carcinoma: Update','https://austinpublishinggroup.com/otolaryngology/fulltext/ajo-v1-id1010.php','Gurberg J, Prisman E.'],
    ['Hurthle Cell Lesions - A Retrospective Review of Final Surgical Pathology Thyroid Disorders','https://doi.org/10.4172/2167-7948.1000155','Kroeker T, Prisman E, Shah M, MacMillan C, Freeman J.'],
    ['Transoral Laser Microsurgery for early glottic carcinoma','https://doi.org/10.4172/2161-1076.1000201','Lin J, Prisman E.'],
    ['Zenker diverticulum','https://doi.org/10.1016/j.otc.2013.08.011','Prisman E, Genden EM.'],
    ['Prevention and management of treatment-induced pharyngo-oesophageal stricture','https://doi.org/10.1016/S1470-2045(13)70160-8','Prisman E, Miles BA, Genden EM.'],
    ['Phayrgnoesophageal Steneosis: Pathophysiology and Management','https://doi.org/10.1016/S1470-2045(13)70160-8','Prisman E, Miles B, Genden E.'],
  ];

const Row = ({index, style}) => (
    <ListItem button href={list[index][1]} component={Link} divider={true} target="_blank" rel="noopener" style={style}>
                <Typography variant='body1'>
                    <strong>{list[index][0]}</strong>
                    <br/>
                    {list[index][2]}
                </Typography>
    </ListItem>
);

function calculate_Height(length){
    return((length/(window.innerWidth*2))*1500)
}

export default function PublicationList() {
    return (
        <React.Fragment>
            <AutoSizer>
                {({height, width}) => (
                    <List
                        className="List"
                        height={height}
                        itemCount={list.length}
                        itemSize={calculate_Height(200)}
                        width={width}
                        style={{overflow: 'auto'}}
                    >
                        {Row}
                    </List>
                )}
            </AutoSizer>
        </React.Fragment>)
}

