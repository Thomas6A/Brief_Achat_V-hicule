package com.company.project.entity.decorateur;

public class NotificationDecorator implements Notification {
	
	private Notification wrappee;
	
	NotificationDecorator(Notification source){
		this.wrappee = source;
	}
	
	@Override
	public void send(String message) {
		wrappee.send(message);
	}

}
