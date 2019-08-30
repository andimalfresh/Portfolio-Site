This is the Winter Park Run Tracker Application README File for the Backend. 

<!-- Lift STATS -->
Arrow	630 ft.	6 min.

Challenger	1,461 ft.	9.5 min.

Discovery	120 ft.	3.5 min.

Eagle Wind	1,180 ft.	9 min.

Endeavour	187 ft.	5 min.

Eskimo Express	1,241 ft.	4.2 min.

Galloping Goose	130 ft.	2.5 min.

Gemini Express	490 ft.	3 min.

High Lonesome Express	778 ft.	7.5 min.

Iron Horse	1,676 ft.	11.5 min.

Lariat	51 ft.	1.5 min.

Looking Glass	459 ft.	5 min.

Olympia Express	1,112 ft.	8 min

Panoramic Express	1,642 ft.	7.5 min.

Pioneer Express	1,215 ft.	6.5 min.

Pony Express	1,052 ft.	6.5 min.

Prospector Express	703 ft.	4 min.

Spirit	48 ft.	3 min.

Sunnyside	873 ft.	8 min.

Super Gauge Express	1,770 ft.	7 min.

Village Cabriolet	83 ft.	2.4 min.

Zephyr Express	1,610 ft.	7 min.







<!-- USERS TABLE  -->

user_name: STRING
name: STRING
id: INTEGER
user_type: INTEGER ( 1 = lowest level (patron), 2 = employee // can commit snowCat changes/ comments, 3 = mountain management/dispatch // can commit OPEN RUN CHANGES on patron side, 4 = DevOps/AppDev ALL access )
home_resort: fk from resorts table , 1 to 1 relationship

<!-- RESORT TABLE -->

resort_name: STRING
id: INTEGER
is_open: BOOLEAN
lifts: fk from LIFTS TABLE: 1 to Many 
ski_runs: fk from RUNS TABLE : 1 to Many
terrain_areas:
closing_day: STRING

<!-- LIFTS TABLE -->
lift_name: STRING
id: INTEGER
open_for_season: BOOLEAN
running_today: BOOLEAN
chair_type: INTEGER (number value denotes char type 1, 2, 3, 4, 5, 6) 
year_built: INTEGER
ride_height: INTEGER
ride_time: INTEGER
line_time: INTEGER
ski_runs: INTEGER 1 to many(runs that intersect or are close to the lift)

<!-- RUNS TABLE  -->

run_name: STRING
id: INTEGER
run_type: INTEGER (1 = GREEN , 2 = BLUE, 3 = BLUE/BLACK, 4 = BLACK, 5= DUB_BLACK, 6 = TERRAIN PARK)
run_open: BOOLEAN
