# RAO Skywatch

# Description
RAO Skywatch (designed for instrumentation at the Rothney Astropysical Observatory) is a React web application designed to house views of three critical pieces of technology:

1. The RAO AllSky Camera

2. The RAO WeatherCam

3. The RAO-BN Zenith Sky Quality Meter (SQM)

As a telescope operator, these three instruments provide critical information that is needed to run observations remotely. This project consolidates a view of the output from all three of these devices onto a single screen making it easy to keep track - like security camera software, but for a telescope operator.

# Features
Project features include:

- A live clock that displays the time both in RAO local time, and Universal Time Coordinated (UTC).

- Fresh views every 60 seconds from the Rothney Astrophysical Observatory AllSky camera, Zenith SQM, and WeatherCam in a consolidated single-page view, or separate pages dedicated to each instrument.

    - Never refresh a webpage ever again. Skywatch ensures you have the most recent image from the RAO within the last 60 seconds.

- Integration of the Government of Canada Weather radar on the 'WeatherCam' page for a convenient eye on the local weather.

# How to Use
To use the app, simply visit: *insert link*

# Technologies
Project technologies include:

- React hooks `useState` and `useEffect` power most of the app's features including:

    - The custom built `SkyCard` React component, the true hallmark of this application, which renders live views from the three instruments described above

    - The custom built `Clock` component renders not only the current time, but also the time in Universal Time Coordinated (UTC) which is used by virtually all telescope control systems.

        - The `Clock` component uses the React hooks `useState` and `useEffect` along with the built in JavaScript `Date()` object to provide the user with at-a-glance confirmation of the local and teleccope time.

- This app uses `react-router-dom` version 6 architecture for lightning fast navigation between features, keeping you focused on the task of operating research grade telescopes.

# Collaborators
This app was written and built soley by Eric Hess, the 2023-2024 Astrophysics Intern at the Rothney Astrophysical Observatory.

The AllSky camera, Sky Quality Meter, and WeatherCam are all owned and maintained by the Rothney Astrophysical Observatory, which is a satellite research facility of the University of Calgary.

This project solely represents the developer, Eric Hess.

# Liscense & Copyright
This project is not open-source, and has no open-source liscense, "meaning that [I, Eric Hess] retain all rights to [my] source code and no one may reproduce, distribute, or create derivative works from [my] work," according to [GitHub's Liscensing Guidelines.](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
