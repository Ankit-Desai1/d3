import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as d3 from "d3";
import { getTextWidth } from 'get-text-width';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {
  
  teams:any[]=['GT','RCB','RR','CSK','LSG','KKR','SRH','PBKS','MI','DC']

  treeData =
  {
    "name": "IPL",
    "children": [
      { 
        "name": "GT",
        "children": [
          { "name": "Hardik Pandya" ,
            "children":[
              {
                "name":"Captain",
              },
              {
                "name":"Batting Allrounder",
              }
            ]
          },
          { 
            "name": "Shubhman Gill" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Wriddhiman Saha" ,
            "children":[
              {
                "name":"WK-Batsman",
              }
            ]
          },
          { 
            "name": "Matthew Wade" ,
            "children":[
              {
                "name":"WK-Batsman",
              }
            ]
          },
          { 
            "name": "David Miller" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Rahul Tewatia" ,
            "children":[
              {
                "name":"Batting Allrounder",
              }
            ]
          },
          { 
            "name": "Rashid Khan" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "R Sai Kishore" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Lockie Ferguson" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Yash Dayal" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Mohammed Shammi" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
        ]
      },
      { 
        "name": "MI",
        "children": [
          { "name": "Rohit Sharma" ,
            "children":[
              {
                "name":"Captain",
              },
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Ishan Kishan" ,
            "children":[
              {
                "name":"WK-Batsman",
              }
            ]
          },
          { 
            "name": "Dewald Brevis" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Tilak Varma" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Ramdeep Singh" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Tim David" ,
            "children":[
              {
                "name":"Batting Allrounder",
              }
            ]
          },
          { 
            "name": "Daniel Same" ,
            "children":[
              {
                "name":"Bowling Allrounder",
              }
            ]
          },
          { 
            "name": "Jaydev Unadkat" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Riley Meredith" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Jasprit Bumrah" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Mayank Markande" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
        ]
      },
      { 
        "name": "RCB",
        "children": [
          { "name": "Virat Kohli" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Faf du Plessis" ,
            "children":[
              {
                "name":"Captain",
              },
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Rajat Patidar" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Glenn Maxwell" ,
            "children":[
              {
                "name":"Batting Allrounder",
              }
            ]
          },
          { 
            "name": "Dinesh Kartik" ,
            "children":[
              {
                "name":"WK-Batsman",
              }
            ]
          },
          { 
            "name": "Mahipal Lomror" ,
            "children":[
              {
                "name":"Batting Allrounder",
              }
            ]
          },
          { 
            "name": "Shahbaz Ahmed" ,
            "children":[
              {
                "name":"Bowling Allrounder",
              }
            ]
          },
          { 
            "name": "Wanindu Hasaranga" ,
            "children":[
              {
                "name":"Bowling Allrounder",
              }
            ]
          },
          { 
            "name": "Harshal Patel" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "josh Hazlewood" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Mohammed Siraj" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
        ]
      },
      { 
        "name": "CSK",
        "children": [
          { "name": "Ruturaj Gaikwad" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Ambati Rayudu" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Devon Conway" ,
            "children":[
              {
                "name":"WK-Batsman",
              }
            ]
          },
          { 
            "name": "MS Dhoni" ,
            "children":[
              {
                "name":"Captain",
              },
              {
                "name":"WK-Batsman",
              }
            ]
          },
          { 
            "name": "N Jagadeesan" ,
            "children":[
              {
                "name":"WK-Batsman",
              }
            ]
          },
          { 
            "name": "Ravindra Jadeja" ,
            "children":[
              {
                "name":"Batting Allrounder",
              }
            ]
          },
          { 
            "name": "Moeen Ali" ,
            "children":[
              {
                "name":"Batting Allrounder",
              }
            ]
          },
          { 
            "name": "Mitchell Santner" ,
            "children":[
              {
                "name":"Bowling Allrounder",
              }
            ]
          },
          { 
            "name": "Prashant Solanki" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Tushar Deshpande" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Chris Jordan" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
        ]
      },
      { 
        "name": "LSG",
        "children": [
          { "name": "KL Rahul" ,
            "children":[
              {
                "name":"Captain",
              },
              {
                "name":"WK-Batsman",
              }
            ]
          },
          { 
            "name": "Quinton de Kock" ,
            "children":[
              {
                "name":"WK-Batsman",
              }
            ]
          },
          { 
            "name": "Evin Lewis" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Deepak Hooda" ,
            "children":[
              {
                "name":"Batting Allrounder",
              }
            ]
          },
          { 
            "name": "Manan Vohra" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Marcus Stoinis" ,
            "children":[
              {
                "name":"Batting Allrounder",
              }
            ]
          },
          { 
            "name": "Jason Holder" ,
            "children":[
              {
                "name":"Bowling Allrounder",
              }
            ]
          },
          { 
            "name": "Krishnappa Gowtham" ,
            "children":[
              {
                "name":"Bowling Allrounder",
              }
            ]
          },
          { 
            "name": "Mohsin Khan" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Avesh Khan" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Ravi Bishnoi" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
        ]
      },
      { 
        "name": "RR",
        "children": [
          { "name": "Yashasvi Jaiswal" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Jos Buttler" ,
            "children":[
              {
                "name":"WK-Batsman",
              }
            ]
          },
          { 
            "name": "Sanju Samson" ,
            "children":[
              {
                "name":"Captain",
              },
              {
                "name":"WK-Batsman",
              }
            ]
          },
          { 
            "name": "Devdutt Padikkal" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Shimron Hetmyer" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Riyan Parag" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "R Ashwin" ,
            "children":[
              {
                "name":"Bowling Allrounder",
              }
            ]
          },
          { 
            "name": "Trent Boult" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Prasidh Krishna" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Yuzvendra Chahal" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Obed McCoy" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
        ]
      },
      { 
        "name": "DC",
        "children": [
          { "name": "David Warner" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Sarfaraz Khan" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Mitchell Marsh" ,
            "children":[
              {
                "name":"Batting Allrounder",
              }
            ]
          },
          { 
            "name": "Rishabh Pant" ,
            "children":[
              {
                "name":"Captain",
              },
              {
                "name":"WK-Batsman",
              }
            ]
          },
          { 
            "name": "Rovman Powell" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Lalit Yadav" ,
            "children":[
              {
                "name":"Batting Allrounder",
              }
            ]
          },
          { 
            "name": "Shardul Thakur" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Axar Patel" ,
            "children":[
              {
                "name":"Bowling Allrounder",
              }
            ]
          },
          { 
            "name": "Kuldeep Yadav" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Anrich Nortje" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Khaleel Ahmed" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
        ]
      },
      { 
        "name": "PBKS",
        "children": [
          { "name": "Jonny Bairstow" ,
            "children":[
              {
                "name":"Wk-Batsman",
              }
            ]
          },
          { 
            "name": "Shikhar Dhawan" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Bhanuka Rajapaksa" ,
            "children":[
              {
                "name":"WK-Batsman",
              }
            ]
          },
          { 
            "name": "Lian Livingstone" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Mayank Agarwal" ,
            "children":[
              {
                "name":"Captain",
              },
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Jitesh Sharma" ,
            "children":[
              {
                "name":"WK-Batsman",
              }
            ]
          },
          { 
            "name": "Harpreet Brar" ,
            "children":[
              {
                "name":"Batting Allrounder",
              }
            ]
          },
          { 
            "name": "Rishi Dhawan" ,
            "children":[
              {
                "name":"Bowling Allrounder",
              }
            ]
          },
          { 
            "name": "Kagiso Rabada" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Rahul Chahar" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Arshdeep Singh" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
        ]
      },
      { 
        "name": "SRH",
        "children": [
          { "name": "Abhishek Sharma" ,
            "children":[
              {
                "name":"Bowling Allrounder",
              }
            ]
          },
          { 
            "name": "Kane Williamson" ,
            "children":[
              {
                "name":"Captain",
              },
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Priyam Garg" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Nicholas Pooran" ,
            "children":[
              {
                "name":"WK-Batsman",
              }
            ]
          },
          { 
            "name": "Rahul Tripathi" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Aiden Markram" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Washington Sundar" ,
            "children":[
              {
                "name":"Batting Allrounder",
              }
            ]
          },
          { 
            "name": "Bhuvneshwar Kumar" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Fazalhaq Farooqi" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Umran Malik" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "T Natrajan" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
        ]
      },
      { 
        "name": "KKR",
        "children": [
          { "name": "Venkatesh Iyer" ,
            "children":[
              {
                "name":"Batting Allrounder",
              }
            ]
          },
          { 
            "name": "Ajinkya Rahane" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Shreyas Iyer" ,
            "children":[
              {
                "name":"Captain",
              },
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Sam Billings" ,
            "children":[
              {
                "name":"WK-Batsman",
              }
            ]
          },
          { 
            "name": "Rinku Singh" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Nitish Rana" ,
            "children":[
              {
                "name":"Batsman",
              }
            ]
          },
          { 
            "name": "Andre Russell" ,
            "children":[
              {
                "name":"Bowling Allrounder",
              }
            ]
          },
          { 
            "name": "Sunil Narine" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Umesh Yadav" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Tim Southee" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
          { 
            "name": "Varun Chakravarthy" ,
            "children":[
              {
                "name":"Bowler",
              }
            ]
          },
        ]
      },
    ]
  };

  margin = {top: 20, right: 90, bottom: 30, left: 90};
  width = 1260 - this.margin.left - this.margin.right;
  height = 2500 - this.margin.top - this.margin.bottom;
  i = 0;

  svg:any;
  treemap:any;
  root:any;

  constructor(private route:Router , private data:DataService){}

  ngOnInit(): void {
    this.svg = d3.select(".chart").append("svg")
      .attr("width", this.width + this.margin.right + this.margin.left)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", "translate("+ this.margin.left + "," + this.margin.top + ")");

    this.treemap = d3.tree()
      .size([this.height,this.width]);

    this.root = d3.hierarchy(this.treeData, function(d:any) { return d.children; });
    this.root.x0 = this.height / 2;
    this.root.y0 = 0;
    this.root.children.forEach((d: any) => {
        this.collapse(d);
      });
    this.update(this.root);
  }

  update(source:any){
    const treeData = this.treemap(this.root);
    
    // Compute the new tree layout.
    const nodes = treeData.descendants();
    const links = treeData.descendants().slice(1);

    links.forEach(function(d:any){ d.y = d.depth * 270});

    const node = this.svg.selectAll('g.node')
            .data(nodes, (d:any) => {return d.id || (d.id = ++ this.i); });
      
          
    // Enter any new modes at the parent's previous position.
    const nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr("transform", function(d:any) {
                  return "translate(" + source.y0 + "," + source.x0 + ")";
              });

    nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 4)
      .attr("fill", function(d:any) {
        return d.children || d._children ? "lightsteelblue" : "orange";})
      .on("click", (e:any, d:any) => {this.click(d)});
      
    // Add labels for the nodes
    nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr("x",  13)
      .attr("text-anchor", "start")
      .text(function(d:any) { return d.data.name; })
      .attr('cursor', 'pointer')
      .on('click',(e:any,d:any)=>{this.teamName(d.data.name)});
    
    const nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate.transition()
    .duration(750)
    .attr("transform", function(d:any) { 
        return "translate(" + d.y + "," + d.x + ")";
      });
    
    // Update the node attributes and style
    nodeUpdate.select('circle.node')
      .attr('r', 4)
      .style("fill", function(d:any) {
          return d._children ? "lightsteelblue" : "orange";
      })
      .attr('cursor', 'pointer');
    
    // Remove any exiting nodes
    const nodeExit = node.exit().transition()
        .duration(750)
        .attr("transform", function(d:any) {
            return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle')
      .attr('r', 1e-6);
  
    // On exit reduce the opacity of text labels
    nodeExit.select('text')
      .style('fill-opacity', 1e-6);

    const link = this.svg.selectAll('path.link')
                        .data(links, function(d:any) { return d.id; });
            

    // Enter any new links at the parent's previous position.
    const linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .attr("stroke", "#ccc")
        .attr("stroke-width", "2px")
        .attr("fill","none")
        .attr('d', function(d:any){
                  var o = {x: source.x0, y: source.y0}
                  return diagonal(o, o,d.parent.data.name)
                });
      
    // UPDATE
    const linkUpdate = linkEnter.merge(link);
  
    // Transition back to the parent element position
    linkUpdate.transition()
        .duration(750)
        .attr('d', function(d:any){ return diagonal(d, d.parent,d.parent.data.name) });
  
    // Remove any exiting links
    const linkExit = link.exit().transition()
        .duration(750)
        .attr('d', function(d:any) {
          var o = {x: source.x, y: source.y}
          return diagonal(o, o,d.parent.data.name)
        })
        .remove();
  
    // Store the old positions for transition.
    nodes.forEach(function(d:any){
      d.x0 = d.x;
      d.y0 = d.y;
    });

    function diagonal(s:any, d:any,l:any) {
      let width = getTextWidth(l) + 20;
      let path = `M ${(((width))+d.y)} ${d.x}
                  H ${(d.y) + ((s.y - d.y) / 2)}
                  V ${(s.x)}
                  H ${s.y}`
                  
        return path 
    }
  }

  // Collapse the node and all it's children
  collapse(d:any) {
    if(d.children) {
      d._children = d.children;
      d._children.forEach((d: any) => {
        this.collapse(d);
      });
      d.children = null;
    }
  }

  click(d:any){
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    this.update(d);
  }

  teamName(name:any){
    if(this.teams.indexOf(name) != -1){
      this.data.getName(name);
      this.route.navigate(['content'])
    }
  }
  
}