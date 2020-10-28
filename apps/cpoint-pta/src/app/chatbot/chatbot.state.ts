import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext, NgxsOnInit } from '@ngxs/store';
import { ChatbotActions } from './chatbot.actions';
import { SpeechRecognitionService } from './speech-recognition.service';

export interface ChatbotStateModel {
  dialogText: string;
}

@Injectable()
@State<ChatbotStateModel>({
  name: 'chatbot',
  defaults: {
    dialogText: '',
  }
})
export class ChatbotState {

  constructor(private readonly speechRecognition: SpeechRecognitionService) {

  }

  @Selector()
  public static dialogText(state: ChatbotStateModel) {
    return state.dialogText;
  }

  @Selector()
  public static getState(state: ChatbotStateModel) {
    return state;
  }

  @Action(ChatbotActions.UpdateDialogText)
  private updateDialogText(ctx: StateContext<ChatbotState>, action: ChatbotActions.UpdateDialogText) {
    return ctx.patchState({dialogText: action.text});
  }

  @Action(ChatbotActions.DetectTextIntent)
  private detectTextIntent(ctx: StateContext<ChatbotState>, action: ChatbotActions.DetectTextIntent) {
    return ctx.patchState({dialogText: action.text});
  }
}
