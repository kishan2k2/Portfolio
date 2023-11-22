/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "A comparative analysis of genetic algorithm parameters for Flappy-Bird game automation using NEAT library.",
    authors:
      "Kishan, Amar, Sahil",
    conferences:
      "Shortlisted in Elsevier publication, scopus and crossref during ICDAM and HINWEIS conference.",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/FlappyBird.png",
    citation: {
      vancouver:
        "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      `Neuroevolutionary algorithms have gained significant attention as a promising approach in solving complex problems. In this research, we present a parameter analysis of neuroevolution for the Flappy Bird Genetic Algorithm using the NEAT (NeuroEvolution of Augmenting Topologies) library. The main objective of this study is to explore the performance analysis of the NEAT algorithm by varying its parameters. 

      To achieve this, the Flappy Bird game was chosen as a testbed. The NEAT algorithm was employed to train an artificial neural network (ANN) to play the game autonomously. By implementing a fitness function that evaluates the game performance, the NEAT algorithm evolves the structure and weights of the ANN to optimize its gameplay strategy.
      
      To analyze the performance of the NEAT algorithm, we employed popular data analysis tools such as NumPy, Pandas, and Matplotlib to investigate the effects of parameter variations on the neuroevolutionary process. These parameters include population size, mutation rate, and crossover method. By systematically adjusting these parameters, the impact on the algorithm's convergence, solution quality, and computational efficiency was assessed.
      
      The significance of this research lies in the potential applications of automated game-playing and the understanding gained through performance analysis. The findings contribute to the field of evolutionary computation and highlight the adaptability and robustness of the NEAT algorithm in solving complex problems.
      `,
    absbox: "absPopup1",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="https://drive.google.com/file/d/1Az2eOHyyDzIxtIFbNO93JbRG7oGpxThO/view?usp=sharing" class="paperTitle", target = "_blank"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
