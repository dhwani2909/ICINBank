package com.project.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class PrimaryTransaction {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private Date date;
	private String description;
	private String type;
	private double amount;
	private double availableBalance;
	
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "primary_account_id")
	private PrimaryAccount primaryAccount;
	
	public PrimaryTransaction() {
		// TODO Auto-generated constructor stub
	}

	public PrimaryTransaction(Date date, String description, String type, double amount, double availableBalance, PrimaryAccount primaryAccount) {
		super();
		this.date = date;
		this.description = description;
		this.type = type;
		this.amount = amount;
		this.availableBalance = availableBalance;
		this.primaryAccount = primaryAccount;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public double getAvailableBalance() {
		return availableBalance;
	}

	public void setAvailableBalance(double availableBalance) {
		this.availableBalance = availableBalance;
	}

	public PrimaryAccount getPrimaryAccount() {
		return primaryAccount;
	}

	public void setPrimaryAccount(PrimaryAccount primaryAccount) {
		this.primaryAccount = primaryAccount;
	}

}
