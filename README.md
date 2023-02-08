# Running

1. Run `rails db:seed` in your terminal to load database with json file
2. Run `bundle exec rails server` in your terminal (within your `placements_teaser` project directory).
3. Go to `localhost:3000` in your browser and play around

# What was done

- Table view with pagination
- Selectable page sizes
- Search bar where you can select from id, campaign_id, campaign_name, and line_item_name to search by
- Persistent editing of adjustments (if you refresh, the change still populates)

# Technical details

I updated react-rails to 2.6.1 so I could make use of hooks and functional components, so I refactored the class components
I persisted the json array to database and I use the gem `will_paginate` for pagination from the backend
I built out the table using react, bootstrap, and lodash

# Process

Initially I saw that the invoices were loaded in json, so I thought it would make sense to load all the data and
do all the functionality in the front end. I thought it would make sense to import a component library such as Ant
to use as the table which would give me a lot of the functionality I wanted. However, I ran into issues with webpacker
(which I learned was both deprecated but the only system that could take arbitrary npm modules that was compatible with this version of rails).
In the end, I thought it would be more fun to reinvent the core components of the table and filter from scratch with bootstrap, react, and javascript then to wrestle with the build system any longer

Having almost no background in Ruby, I initially aimed to do what I could in react/javascript. I started with the table and implemented frontend pagination and filtering by chunking and filtering the entire json array
When I started working on making making the adjustments editable, I wanted to actually persist this since it didn't feel right to have this
on the client side, plus I hadn't touched much of the Ruby side at this point and I wanted to learn more
After finding how to seed the database and propagate that information, my initial query became too slow since now I was doing
a database fetch of 10k invoices
Thus I decided I needed to reimplement the pagination by calling the api. I found the `will_paginate` gem, and I only needed to replace
the manual chunking I had done on the frontend with API calls. Similarly, I adjusted the filter method in the same way
