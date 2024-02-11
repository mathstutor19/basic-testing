// Uncomment the code below and write your tests
import {
  BankAccount,
  TransferFailedError,
  SynchronizationFailedError,
  // InsufficientFundsError,
  getBankAccount,
} from './index';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    // Write your test here
    const initialBalance = 100;
    const account = new BankAccount(initialBalance);
    expect(account.getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    const account = new BankAccount(100);
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    const account = new BankAccount(100);
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    const account = getBankAccount(100);
    expect(() => account.transfer(50, account)).toThrowError(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    // Write your test here
    const account1 = new BankAccount(200);
    const account2 = new BankAccount(100);

    account1.transfer(50, account2);

    expect(account1.getBalance()).toBe(150);
    expect(account2.getBalance()).toBe(150);
  });

  test('should withdraw money', () => {
    // Write your test here
    const account = new BankAccount(100);
    const amount = 50;
    account.withdraw(amount);
    expect(account.getBalance()).toBe(100 - amount);
  });

  test('should transfer money', () => {
    // Write your test here
    const account1 = new BankAccount(100);
    const account2 = new BankAccount(200);
    const amount = 50;
    account1.transfer(amount, account2);
    expect(account1.getBalance()).toBe(100 - amount);
    expect(account2.getBalance()).toBe(200 + amount);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    const balanceType = 'number';
    const errorType = 'object';
    const account = new BankAccount(100);
    const balance = await account.fetchBalance();
    expect(typeof balance).toBe(balance === null ? errorType : balanceType);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    const account = new BankAccount(100);
    jest.spyOn(account, 'fetchBalance').mockResolvedValueOnce(50);
    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(50);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    const account = new BankAccount(100);
    jest.spyOn(account, 'fetchBalance').mockResolvedValueOnce(null);
    await expect(account.synchronizeBalance()).rejects.toThrowError(
      SynchronizationFailedError,
    );
  });
});
