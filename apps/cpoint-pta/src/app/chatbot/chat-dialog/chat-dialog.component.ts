import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ChatbotActions } from '../chatbot.actions';
import { ChatbotState } from '../chatbot.state';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {

  @Select(ChatbotState.chatText) dialogText$: Observable<string>;

  constructor(private readonly store: Store) {

  }

  ngOnInit(): void {
  }

  onSendButtonClick(e) {
    const currentText = e.target.value;
    return this.store.dispatch(new ChatbotActions.DetectTextIntent(currentText));
  }

  onKeydown(e) {
    if (e.code !== 'Enter'){
      return this.store.dispatch(new ChatbotActions.UpdateChatText(e.target.value));
    }
    this.store.dispatch(new ChatbotActions.UpdateChatText(e.target.value));
    return this.store.dispatch(new ChatbotActions.DetectTextIntent(e.target.value));
  }

}
