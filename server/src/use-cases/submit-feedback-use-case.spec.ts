import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  {create: createFeedbackSpy},
  {sendMail: sendMailSpy}
);


describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {

    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "exemple comment",
      screenshot: "test.jpg"
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();

  });
});