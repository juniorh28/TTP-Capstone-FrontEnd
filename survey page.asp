<!DOCTYPE html>

<html lang = "en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link  rel="stylesheet" href="survey page.css">
        <link href="https://fonts.googleapis.com/css2?family=Saira+Condensed&display=swap" rel="stylesheet"> 
        <title>Survey on Games</title>
    </head>
    
    <body>
        <div class = "container">
            <header class = "header">
                <h1 id = "title">Gaming survey</h1>
                <p><u>Share with us what you think where we can do better</u></p>
            </header>
            <form id = "survey-form">
                <div class = "form-group">
                    <label id = "name-label" for = "name";>Name: </label>
                    <input
                        type="text";
                        name = "name";
                        class="form-control";
                        placeholder = "Enter your name";
                        required;
                    > 
                </div>
                <div class = "form-group">
                    <label id = "email-label">Email: </label>
                    <input
                        type = "email";
                        name = "email";      
                        class="form-control";              
                        placeholder="Enter your email";
                        required;
                    >
                </div>
                <div class = "form-group">
                    <label id = "number-label"; for = "number";>Age</label>
                    <input
                        type = "number";
                        name = "age";
                        class="form-control";
                        id = "number";
                        min = "13";
                        max = "100";
                        placeholder = "Age";
                    >
                </div>
                <div class = "form-group">
                    <p>Where do you game the most?</p>
                    <select id = "dropdown" name = "role"; class = "form-control"; required;>
                        <option disabled selected value>Select device</option>
                        <option value="Playstation">Playstation</option>
                        <option value="Xbox">Xbox</option>
                        <option value="Nintendo">Nintendo</option>
                        <option value="PC">PC</option>
                        <option value="Mac">Mac</option>
                    </select>
                </div>
                <div class = "form-group">
                    <p>Would you recommend gaming to your friends?</p>
                    <label>
                        <input
                          name="user-recommend"
                          value="definitely"
                          type="radio"
                          class="input-radio"                        
                        />Definitely</label>
                    <label>
                        <input
                            name="user-recommend"
                            value="Some"
                            type="radio"
                            class="input-radio"
                        />Maybe</label>
                    <label>
                        <input
                            name="user-recommend"
                            value="No"
                            type="radio"
                            class="input-radio"
                            />No</label>
                </div>
                <div>
                    <p>What gaming device do you own? <span>(Check all that applies)</span></p>
                    <label>
                        <input
                            name="devices"
                            value="ps4"
                            type="checkbox"
                            class="input-checkbox"
                            />PS4</label>
                    <label>
                        <input
                            name="devices"
                            vaule="xbox1"
                            type="checkbox"
                            class="input-checkbox"
                            />Xbox one
                    </label>
                    <label>
                        <input
                            name="device"
                            value="switch"
                            type="checkbox"
                            class="input-checkbox"
                            />Switch
                    </label>
                    <label>
                        <input
                            name="device"
                            value="PC"
                            type="checkbox"
                            class="input-checkbox"
                            />PC
                    </label>
                    <label>
                        <input
                            name="device"
                            value="mac"
                            type="checkbox"
                            class="input-checkbox"
                            />Mac
                    </label>
                </div>
                <div class="form-group">
                    <p>Any comments or suggestions?</p>
                    <textarea
                      id="comments"
                      class="input-textarea"
                      name="comment"
                      placeholder="Enter your comment here..."
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <button type="submit" id="submit" class="submit-button">
                      Submit
                    </button>
                  </div>
                    
            </form>

        </div>
    </body>
</html>