<?php
// Allow any origin to access this API (not recommended for production)
header("Access-Control-Allow-Origin: *");

// Allow specific HTTP methods (GET, POST, etc.)
header("Access-Control-Allow-Methods: *");

// Allow specific HTTP headers in the request
header("Access-Control-Allow-Headers: Content-Type");
// Check the HTTP request method


// Define some sample data (can be replaced with a database query)
$sampleData = [
    [
            "name" => "Tiger Nixon",
            "position" => "System Architect",
            "office" => "Edinburgh",
            "age" => "61",
            "start_date" => "2011/04/25",
            "salary" => "$320,800"
        ],
        [
            "name" => "Garrett Winters",
            "position" => "Accountant",
            "office" => "Tokyo",
            "age" => "63",
            "start_date" => "2011/07/25",
            "salary" => "$170,750"
        ],
        [
            "name" => "Ashton Cox",
            "position" => "Junior Technical Author",
            "office" => "San Francisco",
            "age" => "66",
            "start_date" => "2009/01/12",
            "salary" => "$86,000"
        ],
        [
            "name" => "Cedric Kelly",
            "position" => "Senior Javascript Developer",
            "office" => "Edinburgh",
            "age" => "22",
            "start_date" => "2012/03/29",
            "salary" => "$433,060"
        ],
        [
            "name" => "Airi Satou",
            "position" => "Accountant",
            "office" => "Tokyo",
            "age" => "33",
            "start_date" => "2008/11/28",
            "salary" => "$162,700"
        ],
        [
            "name" => "Brielle Williamson",
            "position" => "Integration Specialist",
            "office" => "New York",
            "age" => "61",
            "start_date" => "2012/12/02",
            "salary" => "$372,000"
        ],
        [
            "name" => "Herrod Chandler",
            "position" => "Sales Assistant",
            "office" => "San Francisco",
            "age" => "59",
            "start_date" => "2012/08/06",
            "salary" => "$137,500"
        ],
        [
            "name" => "Rhona Davidson",
            "position" => "Integration Specialist",
            "office" => "Tokyo",
            "age" => "55",
            "start_date" => "2010/10/14",
            "salary" => "$327,900"
        ],
        [
            "name" => "Colleen Hurst",
            "position" => "Javascript Developer",
            "office" => "San Francisco",
            "age" => "39",
            "start_date" => "2009/09/15",
            "salary" => "$205,500"
        ],
        [
            "name" => "Sonya Frost",
            "position" => "Software Engineer",
            "office" => "Edinburgh",
            "age" => "23",
            "start_date" => "2008/12/13",
            "salary" => "$103,600"
        ],
        [
            "name" => "Jena Gaines",
            "position" => "Office Manager",
            "office" => "London",
            "age" => "30",
            "start_date" => "2008/12/19",
            "salary" => "$90,560"
        ],
        [
            "name" => "Quinn Flynn",
            "position" => "Support Lead",
            "office" => "Edinburgh",
            "age" => "22",
            "start_date" => "2013/03/03",
            "salary" => "$342,000"
        ],
        [
            "name" => "Charde Marshall",
            "position" => "Regional Director",
            "office" => "San Francisco",
            "age" => "36",
            "start_date" => "2008/10/16",
            "salary" => "$470,600"
        ],
        [
            "name" => "Haley Kennedy",
            "position" => "Senior Marketing Designer",
            "office" => "London",
            "age" => "43",
            "start_date" => "2012/12/18",
            "salary" => "$313,500"
        ]
    
    
    // You can now use the $rows array in your PHP code as needed
    
];

// Check the HTTP request method
if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    if (isset($_GET['id'])) {
        // Retrieve data by ID
        $id = intval($_GET['id']); // Convert ID to an integer
        $result = null;
        foreach ($sampleData as $item) {
            if ($item['id'] === $id) {
                $result = $item;
                break;
            }
        }
        if ($result !== null) {
            header("Content-Type: application/json");
            echo json_encode($result);
        } else {
            http_response_code(404); // Not Found
            echo json_encode(["message" => "Data not found for the given ID"]);
        }
    } else{
 // Handle GET requests
 header("Content-Type: application/json");
 echo json_encode($sampleData);
    }
   
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle POST requests
    $requestData = json_decode(file_get_contents("php://input"), true);

    if ($requestData !== null) {
        // Process the received data (e.g., save it to a database)
        // For this example, we'll just return the received data
        header("Content-Type: application/json");
        echo json_encode($requestData);
    } else {
        http_response_code(400); // Bad Request
        echo json_encode(["message" => "Invalid JSON data"]);
    }
} else {
    // Handle other HTTP methods or invalid requests
    http_response_code(405); // Method Not Allowed
    echo json_encode(["message" => "Invalid request method"]);
}


?>