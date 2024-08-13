const initialState = {
  projectData: {
    project_name: "ETL New Demo 2",
    output_name: "ETL N_D2",
    last_run: "Not Available",
    row_count: 500,
    table_headers: [
      { name: "Territory", type: "String" },
      { name: "Date", type: "String" },
      { name: "Units", type: "Int" },
      { name: "Average_Unit_Price", type: "Float" },
      { name: "TV_Total", type: "Float" },
      {
        name: "Video_on_Demand",
        type: "float",
      },
      {
        name: "Proof_of_Concept_Spend",
        type: "float",
      },
      {
        name: "Print_Spend",
        type: "float",
      },
      {
        name: "Online_Display",
        type: "int",
      },
      {
        name: "FSI_Coupon",
        type: "float",
      },
      {
        name: "Feature",
        type: "float",
      },
      {
        name: "Display",
        type: "float",
      },
      {
        name: "Price_Reduction",
        type: "float",
      },
      {
        name: "Feat_and_Disp",
        type: "float",
      },
      {
        name: "Pct_Discount",
        type: "float",
      },
      {
        name: "Competitor_Distribution_1",
        type: "int",
      },
      {
        name: "Competitor_Distribution_2",
        type: "int",
      },
      {
        name: "Competition_Units",
        type: "int",
      },
    ],
    table_data: [
      [
        
        "Brick 001",
        "2021-01-01",
        "298",
        "5.7819",
        "0.0",
        "0.0",
        "0.0",
        "0.0",
        "0",
        "0.0",
        "0.0",
        "0.0827",
        "0.0",
        "0.0",
        "0.0016",
        "38",
        "14",
        "4675",
      ],
      [
        
        "Brick 001",
        "2021-02-01",
        "327",
        "5.8471",
        "94.1656",
        "0.0",
        "0.0",
        "0.0",
        "0",
        "0.0",
        "0.0",
        "0.0289",
        "0.0",
        "0.0",
        "0.0",
        "37",
        "19",
        "4888",
      ],
      [
        
        "Brick 001",
        "2021-03-01",
        "296",
        "5.8209",
        "122.7687",
        "0.0",
        "0.0",
        "0.0",
        "0",
        "0.0",
        "0.0",
        "0.1469",
        "0.018",
        "0.0",
        "0.0107",
        "41",
        "17",
        "4444",
      ],
      [
        
        "Brick 001",
        "2021-04-01",
        "288",
        "5.9479",
        "129.9336",
        "0.0",
        "0.0",
        "0.0",
        "0",
        "0.0",
        "0.0",
        "0.0842",
        "0.0",
        "0.0",
        "0.0048",
        "36",
        "21",
        "4190",
      ],
      [
        
        "Brick 001",
        "2021-04-01",
        "288",
        "5.9479",
        "129.9336",
        "0.0",
        "0.0",
        "0.0",
        "0",
        "0.0",
        "0.0",
        "0.0842",
        "0.0",
        "0.0",
        "0.0048",
        "36",
        "21",
        "4190",
      ],
    ],
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
  
    default:
      return state;
  }
};

export default dataReducer;
