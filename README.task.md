# KNOWRON Front-end Challenge

Thank you for taking the time to look at our front-end tech challenge! If you have any questions or comments, do not hesitate to reach out to me at ali@knowron.com.

* [Description of Problem](#description-of-problem)
* [Task Requirements](#task-requirements)
* [Included Files](#included-files)
* [How to run it](#how-to-run-it)
* [API Routes](#api-routes)
* [Frontend Mockup](#frontend-mockup)
* [Scoring Criteria](#scoring-criteria)
* [Follow-Up Questions](#follow-up-questions)


## Description of Problem

KNOWRON's platform provides service technicians with a digital personal assistant. Part of the skills of this personal assistant is delivering work instructions (think tutorials or checklists) easily and intuitively. These instructies are tied to a manufacturer's specific products.

Product managers need to make sure that the work instructions that the users of their machines receive is always up-to-date and as helpful as possible. While our NLP algorithms do the best job they can with the documentation provided by our clients, PMs often want to further tweak the work instructions to change the language or add helpful images and videos.

KNOWRON provides a Control Suite for PMs to access and edit the assistant's content. Your task is to provide a simple interface for a PM to edit already existing work instructions.

## Frontend Mockup

Assume that this midfi mockup has been produced by the Product team. 

![Frontend Mockup](https://i.ibb.co/sgm7mDv/index.png)

## Task Requirements

Your task is to **implement a very simple user interface for editing the work instructions**.

Feel free to spend as much or as little time on the exercise as you like as long as the following requirements have been met.

Everything described below is considered within the scope of the exercise. You may add extra features but it won’t increase your score to do more work, think of it more as a chance to showcase your skills.

- Frontend

  - Individual work instruction steps' text is shown and can be edited by the user.

  - Extra steps can be added and individual steps can be deleted by the user.

  - User can change the order of the steps by dragging and dropping the steps
  
  - Images can be attached to each step, if the user so chooses.

  - There is a way (e.g. button) to save the current status of the work instructions.


Please use React to solve this challenge. You can use any other libraries on top. The provided files are mostly boilerplate designed to make your work easier, but you don’t need to use them, as long as the user story is fulfilled as described above. 

### Handing the Challenge In

Once you're done, answer the [follow-up questions](#follow-up-questions) and zip everything together. Send the .zip file to ali@knowron.com. We will try to get back to you ASAP.

## Included Files

### `/frontend/`

Very simple React boilerplate. We used [Create React App](https://github.com/facebook/create-react-app).


## How to run it


Once you’ve cloned this repo, You can then run `npm i` on `/frontend/`. This will install the necessary packages.

The App can be started using `npm run start`. 

The frontend will be running on port 3000 ( http://localhost:3000 ).

## API Routes

Please use the following endpoint to access the required data: https://knwrn-frontend-challenge.free.beeceptor.com

Use the provided GET path to access the work instructions. You can query them using their unique identifier. For this exercise, only one set of instructions is available.


## Follow-Up Questions

- How long did you spend on the coding test? 

Ans: 8 hours splitted into 2 days (4 hrs/day)

- What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

 Ans: I think many things could be add:
  - persisting steps in case new steps were added but user tries wanted to just keep editing 
    for multiple times to make a final instruction:
  - Product Image/Video carousel for each product besides each product manual instruction (To   make it more clear for user if they are not able get info properly from instruction)
  - OfCourse basic crud operations 

Ans: 8 hours splitted into 2 days (4 hrs/day)

- Which parts did you spend the most time with? What did you find most difficult?

Ans: Drag and Drop it found few contraints and i did mostly R&D first to get some good package
i knew that it was much easier to do with vanilla JS but it was more time consuming compare to
Battle tested libs which were less error prone and more functionlity:

 Many things were into consideration such as
 - Vertical Switching
 - When to knwo element/card has switch another card (trickest part)
 - Swapping of stepId values

- How did you find the test overall? Did you have any issues or have difficulties completing it? If you have any suggestions on how we can improve the test, we'd love to hear them.

Ans: Found it a good challenge since many things were challenged here:
 - App struture
 - Parent child communication
 - Resuablity interms of component
 - Async nature of react (tricky part i found while swapping local state and setting new values)
 - Dynamically switch things based on Tabs Selection.
