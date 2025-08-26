---
sidebar_position: 1
---

# Real Estate Feasibility Analysis

Runopt's Real Estate Feasibility Analysis tool provides comprehensive property evaluation capabilities to help you make informed investment and development decisions.

## Overview

The Real Estate Feasibility Analysis module combines zoning data, market insights, and financial modeling to assess the viability of real estate projects. Whether you're evaluating a potential investment or planning a development project, this tool provides the data-driven insights you need.

{/*
## Key Features

### 🏗️ Development Potential Assessment
- **Maximum Buildable Area**: Calculate the maximum development potential based on zoning regulations
- **Use Analysis**: Determine permitted uses and restrictions for the property
- **Density Calculations**: Understand FAR (Floor Area Ratio) and density limitations
- **Height Restrictions**: Analyze building height and setback requirements

### 📊 Financial Feasibility Modeling
- **Cost Analysis**: Estimate development costs including land, construction, and soft costs
- **Revenue Projections**: Model potential revenue streams based on market data
- **ROI Calculations**: Calculate return on investment and profitability metrics
- **Sensitivity Analysis**: Test different scenarios and market conditions

### 🗺️ Market Intelligence (*)
- **Comparable Sales**: Access recent sales data for similar properties
- **Market Trends**: Analyze market conditions and growth patterns
- **Demographic Data**: Understand the local market demographics
- **Economic Indicators**: Review local economic factors affecting property values

### 📋 Regulatory Compliance
- **Zoning Compliance**: Verify project compliance with local zoning codes
- **Permit Requirements**: Identify necessary permits and approvals
- **Environmental Considerations**: Assess environmental constraints and requirements
- **Infrastructure Analysis**: Evaluate access to utilities and transportation
*/}
## Getting Started

### 1. Create a Project
1. Navigate to the [Homepage](https://core.runopt.co/home)

2. Click on the Start Real Estate Feasibility Analysis Button

![Homepage Real Estate Feasibility Analysis](/img/screenshots/core-product-realestate-feasibility-button.png)

3. Enter the project details
    - Enter project Name
    - Choose a zoning type from the dropdown menu
    - Click on the 'Add Project' Button.  

    ![Homepage Project Details](/img/screenshots/core-product-project-details.png)

4. A new project will be created and displayed under the 'All Projects' section of the Homepage. Click on the project card newly created(usually the first/last card displayed).

![Homepage All projects](/img/screenshots/core-product-all-projects.png)

### 2. Stage One: Building and Parking Lots placement
1. Once the project created is selected from the last step above,
    -  Import Site Data by clicking on the 'Import Existing Site' button under Data tab on the sidebar.

    ![Core product import data](/img/screenshots/core-product-import-data.png)

    -  Upload the Excel or CSV file.

    ![Core product Upload file](/img/screenshots/core-product-upload-csv-file.png)

    -  A terrain layer will be generated.

    ![Core product Upload file](/img/screenshots/core-product-terrain-layer.png)

    - Add building by clicking on the Buildings button on the sidebar. This will open the Buildings Panel.

    ![Core product Upload file](/img/screenshots/core-product-buildings-panel.png)

    - Click on the '+Add Building' button to draw the building footprint on the canvas. Enter the building name on the top of the canvas. Save Building at the bottom of the canvas.

    ![Core product Upload file](/img/screenshots/core-product-draw-building.png)


    - Once done, click the 'Submit the Building' button.

    - Next, click on the 'Parking' Button on the sidebar to open the Parking Specifications panel. Enter the number of parking lots. Save Specifications.

    ![Core product Upload file](/img/screenshots/core-product-add-parking.png)

    - Finally, under the Run tab on the sidebar, click on the 'Run Stage 1 - building placement' button for the first optimization. This will take a 1-2 mins. In the meantime, enjoy reading the fun buiding up process.

    ![Core product Upload file](/img/screenshots/core-product-optimization-process.png)

    - The complete site optimization for the building placement with total project cost that includes Earthworks and Retaining wall costs.

   ![Core product Upload file](/img/screenshots/core-product-complete-site-optimization.png)

### 3. Stage Two: Drainage placement
#### The Geotechnical data part & the roadway module is still under development

#### Utilities 
For the utilities configuration section, you can enter the information based on the data we've provided in the illustration below.

-  Click on the 'Utilities button' on the sidebar. This will open up the Utilities Configuration Panel.

![Core product Upload file](/img/screenshots/core-product-utilities-configuration.png)

-  Under the Water Supply Node, Click on the 'select water supply node' text. This will enable you to select a node (x and y coordinate) on the interactive terrrain. Click on the terrain to select the node.The node x and y coordinate will then appear in the utilities configuration panel.

- Under the Wastewater Use Node click on the 'Select wasterwatr Node' text. This will enable you to select a node on the interactive terrain. Click on the terrain to select the node. The node x and y coordinate will then appear in the utilities configuration panel.

- Select the pipe material from the dropdown menu. 

- Enter the Frost Line Depth, if any.

- Enter the initial Flow Rate.

- Click on save configuration.

- Finally, under the Run tab on the sidebar, click on the 'Run Stage 2: Pipe Design' button for the first optimization. This will take a 1-2 mins to run the process and produce the pipe network optimization and cost. In the meantime, enjoy reading the fun buiding up process.

![Core product Upload file](/img/screenshots/core-product-pipe-design-complete.png)


### 4. Stage Three: Stormwater

Now we can add the stormwater input specifications for the analysis.

- In the sidebar, under the Data tab, click on the 'Precip Data' button.  This will open the Stormwater Input Specifications' form.


![Core product Upload file](/img/screenshots/core-product-storm-water-specifications.png)

- Fill in the Storm Design Frequency.

- Fill in the Frost Line Depth.

- Enter the Minimum Pipe Slope.

- Click on the 'Save Specifications' button. 

- Finally, under the Run tab on the sidebar, click on the 'Run Stage 3: Storm Water Analysis' button for the first optimization. This will take a 1-2 mins to run the process and produce the pipe network optimization and cost. In the meantime, enjoy reading the fun buiding up process.

![Core product Upload file](/img/screenshots/core-product-storm-water-complete.png)

- Different analysis results can be seen under the stormwater tab on the canvas by clicking and selecting the available stormwater methods.

![Core product Upload file](/img/screenshots/core-product-storm-water-diff-analysis.png)


## Output and Reporting
To be implemented soon.

{/*
### Comprehensive Reports
- **Executive Summary**: Key findings and recommendations
- **Detailed Analysis**: In-depth review of all factors
- **Financial Models**: Pro forma statements and projections
- **Risk Assessment**: Potential risks and mitigation strategies

### Export Options
- **PDF Reports**: Professional reports for stakeholders
- **Excel Spreadsheets**: Financial models and data
- **Presentation Slides**: Ready-to-use presentation materials
- **API Access**: Programmatic access to analysis data

## Best Practices

### Before Analysis
- **Verify Property Information**: Ensure accurate property details
- **Define Objectives**: Clearly state project goals and constraints
- **Gather Market Data**: Collect relevant market information
- **Set Parameters**: Define analysis scope and assumptions

### During Analysis
- **Review Multiple Scenarios**: Test different development options
- **Validate Assumptions**: Verify market data and cost estimates
- **Consider Risks**: Identify potential challenges and mitigation
- **Document Decisions**: Keep track of key assumptions and choices

### After Analysis
- **Review Results**: Carefully examine all findings
- **Validate Conclusions**: Cross-check with market reality
- **Plan Next Steps**: Define actionable next steps
- **Share Findings**: Communicate results to stakeholders

## Integration Features

### Platform Integration
- **Zoning Analysis**: Seamless integration with zoning tools
- **Site Design**: Connect with civil engineering analysis
- **Project Management**: Link to project tracking tools
- **Documentation**: Export to documentation systems

### Collaboration Tools
- **Team Sharing**: Share analysis with team members
- **Comment System**: Add notes and observations
- **Version Control**: Track changes and updates
- **Approval Workflows**: Manage review and approval processes
*/}

## Troubleshooting

### Common Issues

**Analysis not generating**
- Check property data completeness
- Verify zoning information availability
- Ensure all required parameters are set
- Contact support if issues persist

### Getting Help
- **Documentation**: Review detailed guides
- **Support Team**: Contact support@runopt.co
- **Community**: Join our user community
- **Training**: Access training materials

## Next Steps

- **[Civil Site Design](./civil-site-design)** - Learn about civil engineering analysis
- **[Property Search](../zoning-analysis/property-search)** - Master zoning analysis tools
