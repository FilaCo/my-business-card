Feature: Home page
  Scenario Outline:
    Given a launched <browser>
    When go to <route>
    Then see the <response>

    Examples:
      | browser | route | response |
      | chromium | /home | <h1>Hello, world!<h2> |